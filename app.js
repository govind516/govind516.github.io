const field = document.querySelector(".starfield");

if (field) {
  // Deterministic placement keeps the starfield calm between visits.
  let seed = 516;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < 95; i += 1) {
    const star = document.createElement("i");
    star.className = "star";
    star.style.left = `${(random() * 96 + 2).toFixed(2)}%`;
    star.style.top = `${(random() * 94 + 3).toFixed(2)}%`;
    star.style.animationDelay = `${(random() * 4).toFixed(2)}s`;
    if (i % 9 === 0) {
      star.style.width = "3px";
      star.style.height = "3px";
      star.style.opacity = ".8";
    }
    field.append(star);
  }
}

const contributionChart = document.querySelector(".contribution-chart");
const chartFallback = document.querySelector(".chart-fallback");

if (contributionChart && chartFallback) {
  contributionChart.addEventListener("error", () => {
    contributionChart.hidden = true;
    chartFallback.hidden = false;
  }, { once: true });
}
