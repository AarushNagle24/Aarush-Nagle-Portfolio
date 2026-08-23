const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const currentYear = document.querySelector("#current-year");
const canvas = document.querySelector("#hero-canvas");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    const label = navToggle.querySelector(".sr-only");
    if (label) {
      label.textContent = isOpen ? "Close navigation" : "Open navigation";
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const observedSections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window && observedSections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01,
    },
  );

  observedSections.forEach((section) => observer.observe(section));
}

function buildHeroScene(targetCanvas) {
  const context = targetCanvas.getContext("2d");
  let width = 0;
  let height = 0;
  let deviceRatio = 1;
  let rafId = 0;
  let pointerX = 0.7;
  let pointerY = 0.42;

  const colors = {
    blue: "rgba(35, 45, 75, 0.42)",
    orange: "rgba(229, 114, 0, 0.52)",
    green: "rgba(36, 106, 92, 0.44)",
    brick: "rgba(165, 72, 50, 0.36)",
    line: "rgba(23, 25, 31, 0.08)",
    grid: "rgba(23, 25, 31, 0.045)",
  };

  const nodes = [
    { x: 0.62, y: 0.18, r: 7, c: "orange" },
    { x: 0.78, y: 0.2, r: 5, c: "blue" },
    { x: 0.9, y: 0.34, r: 8, c: "green" },
    { x: 0.68, y: 0.44, r: 6, c: "green" },
    { x: 0.82, y: 0.57, r: 7, c: "orange" },
    { x: 0.58, y: 0.68, r: 8, c: "brick" },
    { x: 0.94, y: 0.75, r: 5, c: "blue" },
    { x: 0.73, y: 0.82, r: 6, c: "orange" },
  ];

  const routes = [
    [0, 1, 2, 4, 7],
    [0, 3, 5, 7],
    [3, 4, 6],
  ];

  function resize() {
    const rect = targetCanvas.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    deviceRatio = Math.min(window.devicePixelRatio || 1, 2);
    targetCanvas.width = Math.floor(width * deviceRatio);
    targetCanvas.height = Math.floor(height * deviceRatio);
    context.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
  }

  function drawGrid() {
    context.save();
    context.strokeStyle = colors.grid;
    context.lineWidth = 1;

    const spacing = width < 700 ? 42 : 54;
    const offsetX = (pointerX - 0.5) * 16;
    const offsetY = (pointerY - 0.5) * 16;

    for (let x = -spacing; x < width + spacing; x += spacing) {
      context.beginPath();
      context.moveTo(x + offsetX, 0);
      context.lineTo(x + offsetX + height * 0.22, height);
      context.stroke();
    }

    for (let y = -spacing; y < height + spacing; y += spacing) {
      context.beginPath();
      context.moveTo(0, y + offsetY);
      context.lineTo(width, y + offsetY - width * 0.06);
      context.stroke();
    }

    context.restore();
  }

  function drawRoutes(time) {
    context.save();
    context.lineCap = "round";
    context.lineJoin = "round";

    routes.forEach((route, routeIndex) => {
      context.beginPath();
      route.forEach((nodeIndex, pointIndex) => {
        const node = nodes[nodeIndex];
        const x = node.x * width + Math.sin(time * 0.001 + nodeIndex) * 7;
        const y = node.y * height + Math.cos(time * 0.001 + nodeIndex) * 5;

        if (pointIndex === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });

      context.strokeStyle =
        routeIndex === 0
          ? colors.orange
          : routeIndex === 1
            ? colors.green
            : colors.blue;
      context.globalAlpha = 0.5;
      context.lineWidth = routeIndex === 0 ? 4 : 2;
      context.stroke();
    });

    context.restore();
  }

  function drawNodes(time) {
    nodes.forEach((node, index) => {
      const pulse = Math.sin(time * 0.003 + index) * 1.6;
      const x = node.x * width + Math.sin(time * 0.001 + index) * 7;
      const y = node.y * height + Math.cos(time * 0.001 + index) * 5;

      context.save();
      context.fillStyle = colors[node.c];
      context.beginPath();
      context.arc(x, y, node.r + pulse + 7, 0, Math.PI * 2);
      context.fill();

      context.fillStyle =
        node.c === "orange"
          ? "#e57200"
          : node.c === "green"
            ? "#246a5c"
            : node.c === "brick"
              ? "#a54832"
              : "#232d4b";
      context.strokeStyle = "rgba(255, 255, 255, 0.94)";
      context.lineWidth = 3;
      context.beginPath();
      context.arc(x, y, node.r + pulse, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.restore();
    });
  }

  function drawPanels(time) {
    const panels = [
      { x: 0.72, y: 0.09, w: 0.15, h: 0.12, c: "rgba(35, 45, 75, 0.1)" },
      { x: 0.84, y: 0.42, w: 0.13, h: 0.1, c: "rgba(229, 114, 0, 0.13)" },
      { x: 0.61, y: 0.77, w: 0.17, h: 0.1, c: "rgba(36, 106, 92, 0.12)" },
    ];

    panels.forEach((panel, index) => {
      const x = panel.x * width + Math.sin(time * 0.0007 + index) * 8;
      const y = panel.y * height + Math.cos(time * 0.0006 + index) * 6;
      const panelWidth = panel.w * width;
      const panelHeight = panel.h * height;

      context.save();
      context.fillStyle = panel.c;
      context.strokeStyle = "rgba(23, 25, 31, 0.08)";
      context.lineWidth = 1;
      roundRect(context, x, y, panelWidth, panelHeight, 8);
      context.fill();
      context.stroke();

      context.fillStyle = "rgba(23, 25, 31, 0.2)";
      for (let row = 0; row < 3; row += 1) {
        const barWidth = panelWidth * (0.42 + row * 0.14);
        roundRect(context, x + 14, y + 18 + row * 18, barWidth, 5, 3);
        context.fill();
      }
      context.restore();
    });
  }

  function roundRect(ctx, x, y, rectWidth, rectHeight, radius) {
    const maxRadius = Math.min(radius, rectWidth / 2, rectHeight / 2);
    ctx.beginPath();
    ctx.moveTo(x + maxRadius, y);
    ctx.lineTo(x + rectWidth - maxRadius, y);
    ctx.quadraticCurveTo(x + rectWidth, y, x + rectWidth, y + maxRadius);
    ctx.lineTo(x + rectWidth, y + rectHeight - maxRadius);
    ctx.quadraticCurveTo(
      x + rectWidth,
      y + rectHeight,
      x + rectWidth - maxRadius,
      y + rectHeight,
    );
    ctx.lineTo(x + maxRadius, y + rectHeight);
    ctx.quadraticCurveTo(x, y + rectHeight, x, y + rectHeight - maxRadius);
    ctx.lineTo(x, y + maxRadius);
    ctx.quadraticCurveTo(x, y, x + maxRadius, y);
    ctx.closePath();
  }

  function render(time = 0) {
    context.clearRect(0, 0, width, height);
    drawGrid();
    drawPanels(time);
    drawRoutes(time);
    drawNodes(time);

    if (!prefersReducedMotion) {
      rafId = window.requestAnimationFrame(render);
    }
  }

  resize();
  render(0);

  window.addEventListener("resize", () => {
    resize();
    render(0);
  });

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX / Math.max(window.innerWidth, 1);
    pointerY = event.clientY / Math.max(window.innerHeight, 1);
  });

  return () => {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
    }
  };
}

if (canvas) {
  buildHeroScene(canvas);
}
