const d3 = require("d3");

class canvas {

    constructor(config) {
        this.innerColour = (config && config.innerColour) ? config.innerColour : "#0099ff";
        this.outerColour = (config && config.outerColour) ? config.outerColour : "#3619ea";
        this.midColour = (config && config.midColour) ? config.midColour : "magenta";
        this.lineWidth = (config && config.lineWidth) ? config.lineWidth : 0.3;
        this.spacing = (config && config.spacing) ? config.spacing : 40;
        this.charge = (config && config.charge) ? config.charge : 1000;
        this.gravity = (config && config.gravity) ? config.gravity : .05;
    }

    draw() {
        const self = this;
        
        var width = window.innerWidth,
            height = window.innerHeight * 1.5,
            pi = 2 * Math.PI;

        var sample = this.poissonDiscSampler(width, height, self.spacing),
            nodes = [{x: 0, y: 0}],
            s;

        while (s = sample()) nodes.push(s);

        var force = d3.layout.force()
            .size([width, height])
            .nodes(nodes.slice())
            .gravity(0)
            .charge(function(d, i) { return i ? -30 : - self.charge; })
            .on("tick", ticked)
            .start();

        var voronoi = d3.geom.voronoi()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; });

        var root = nodes.shift();

        root.fixed = true;

        var links = voronoi.links(nodes);

        var canvas = d3.select(".background").append("canvas")
            .attr("width", width)
            .attr("height", height)

        window.onmousemove = function(event) {
            root.px = event.clientX; 
            root.py = event.clientY;
            force.resume();
        }
        var context = canvas.node().getContext("2d");

        function ticked() {
            force.resume();

            var gradient = context.createLinearGradient(0,0,width,0);
            gradient.addColorStop("0",self.outerColour);
            gradient.addColorStop("0.25",self.midColour);
            gradient.addColorStop("0.5",self.innerColour);
            gradient.addColorStop("0.75",self.midColour);
            gradient.addColorStop("1.0",self.outerColour);


            for (var i = 0, n = nodes.length; i < n; ++i) {
                var node = nodes[i];
                node.y += (node.cy - node.y) * self.gravity;
                node.x += (node.cx - node.x) * self.gravity;
            }

            context.clearRect(0, 0, width, height);

            context.beginPath();
            for (var i = 0, n = links.length; i < n; ++i) {
                var link = links[i];
                context.moveTo(link.source.x, link.source.y);
                context.lineTo(link.target.x, link.target.y);
            }
            context.lineWidth = self.lineWidth;
            context.strokeStyle = gradient;
            context.stroke();

            context.beginPath();
            for (var i = 0, n = nodes.length; i < n; ++i) {
                var node = nodes[i];
                context.moveTo(node.x, node.y);
                context.arc(node.x, node.y, self.lineWidth * 3, 0, pi);
            }
            context.lineWidth = self.lineWidth;
            context.strokeStyle = "#000";
            context.stroke();
            context.fillStyle = gradient;
            context.shadowBlur = 10;
            context.shadowColor = gradient;
            context.fill();
        }
    }

    poissonDiscSampler(width, height, radius) {
        var k = 30, // maximum number of samples before rejection
            radius2 = radius * radius,
            R = 3 * radius2,
            cellSize = radius * Math.SQRT1_2,
            gridWidth = Math.ceil(width / cellSize),
            gridHeight = Math.ceil(height / cellSize),
            grid = new Array(gridWidth * gridHeight),
            queue = [],
            queueSize = 0,
            sampleSize = 0;

        return function() {
            if (!sampleSize) return sample(Math.random() * width, Math.random() * height);

            // Pick a random existing sample and remove it from the queue.
            while (queueSize) {
            var i = Math.random() * queueSize | 0,
                s = queue[i];

            // Make a new candidate between [radius, 2 * radius] from the existing sample.
            for (var j = 0; j < k; ++j) {
                var a = 2 * Math.PI * Math.random(),
                    r = Math.sqrt(Math.random() * R + radius2),
                    x = s.x + r * Math.cos(a),
                    y = s.y + r * Math.sin(a);

                // Reject candidates that are outside the allowed extent,
                // or closer than 2 * radius to any existing sample.
                if (0 <= x && x < width && 0 <= y && y < height && far(x, y)) return sample(x, y);
            }

            queue[i] = queue[--queueSize];
            queue.length = queueSize;
            }
        };

        function far(x, y) {
            var i = x / cellSize | 0,
                j = y / cellSize | 0,
                i0 = Math.max(i - 2, 0),
                j0 = Math.max(j - 2, 0),
                i1 = Math.min(i + 3, gridWidth),
                j1 = Math.min(j + 3, gridHeight);

            for (j = j0; j < j1; ++j) {
            var o = j * gridWidth;
            for (i = i0; i < i1; ++i) {
                if (s = grid[o + i]) {
                var s,
                    dx = s.x - x,
                    dy = s.y - y;
                if (dx * dx + dy * dy < radius2) return false;
                }
            }
            }

            return true;
        }

        function sample(x, y) {
            var s = {x: x, y: y, cx: x, cy: y};
            queue.push(s);
            grid[gridWidth * (y / cellSize | 0) + (x / cellSize | 0)] = s;
            ++sampleSize;
            ++queueSize;
            return s;
        }
    }
}

export default {
    canvas,
}
