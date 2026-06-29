const STORAGE_KEY = "nutriAbuelitaSeguimientoV1";
const MARKET_KEY = "nutriAbuelitaMercadoV1";

const days = [
  {
    key: "lunes",
    name: "Lunes",
    meals: {
      desayuno: "Arepa mediana + queso campesino bajo en sal + aromática sin azúcar.",
      nueves: "Papaya o manzana.",
      almuerzo: "Carne sudada magra con tomate, cebolla, ajo, laurel y cilantro + papa cocida + ensalada de pepino y zanahoria.",
      postre: "Gelatina sin azúcar con fruta picada.",
      onces: "Yogur natural sin azúcar o kumis sin azúcar.",
      comida: "Porción pequeña de carne desmechada + verduras cocidas. Sin repetir papa si ya hubo al almuerzo."
    }
  },
  {
    key: "martes",
    name: "Martes",
    meals: {
      desayuno: "Huevo tibio o cocido + tostadas integrales + té o aromática sin azúcar.",
      nueves: "Pera o mandarina.",
      almuerzo: "Pollo sudado sin piel + arroz 3 a 4 cucharadas + verduras cocidas.",
      postre: "Compota casera de manzana sin azúcar.",
      onces: "Maní o almendras sin sal, porción pequeña.",
      comida: "Arepita pequeña + queso descremado/bajo en sal + fruta entera."
    }
  },
  {
    key: "miercoles",
    name: "Miércoles",
    meals: {
      desayuno: "Mogolla integral pequeña + aromática o bebida sin azúcar.",
      nueves: "Fruta entera.",
      almuerzo: "Pescado fresco a la plancha o sudado con limón y hierbas + yuca pequeña + ensalada.",
      postre: "Yogur natural sin azúcar con canela y fruta.",
      onces: "Gelatina sin azúcar o fruta.",
      comida: "Pollo desmechado con verduras salteadas en poquito aceite."
    }
  },
  {
    key: "jueves",
    name: "Jueves",
    meals: {
      desayuno: "Queso campesino bajo en sal + arepa mediana + aromática.",
      nueves: "Papaya o banano pequeño.",
      almuerzo: "Lentejas suaves 3 a 4 cucharadas, sin chorizo ni cubito + pollo pequeño + ensalada grande.",
      postre: "Pera cocida con canela.",
      onces: "Nueces o almendras sin sal, poquito.",
      comida: "Huevo cocido + tostada integral + aromática."
    }
  },
  {
    key: "viernes",
    name: "Viernes",
    meals: {
      desayuno: "Huevo cocido o changua suave sin sal fuerte + tostada integral.",
      nueves: "Manzana o mandarina.",
      almuerzo: "Lomo de cerdo magro sudado + plátano pequeño cocido/asado + verduras.",
      postre: "Gelatina sin azúcar con trocitos de fruta.",
      onces: "Yogur natural sin azúcar.",
      comida: "Pescado o pollo pequeño + verduras."
    }
  },
  {
    key: "sabado",
    name: "Sábado",
    meals: {
      desayuno: "Cereal sin azúcar 1/2 taza + yogur natural sin azúcar + fruta.",
      nueves: "Fruta entera.",
      almuerzo: "Ternera magra sudada + arroz 3 a 4 cucharadas + ensalada.",
      postre: "Durazno o papaya picada con yogur natural.",
      onces: "Maní sin sal, porción pequeña.",
      comida: "Arepa pequeña + cuajada o queso bajo en sal + aromática."
    }
  },
  {
    key: "domingo",
    name: "Domingo",
    meals: {
      desayuno: "Arepa + huevo cocido + aromática.",
      nueves: "Fruta.",
      almuerzo: "Pollo al horno o sudado sin piel + papa o yuca pequeña + verduras.",
      postre: "Manzana asada con canela.",
      onces: "Gelatina sin azúcar o fruta.",
      comida: "Cena liviana: pollo desmechado o queso bajo en sal + verduras + tostada integral."
    }
  }
];

const mealMeta = {
  desayuno: { label: "Desayuno", icon: "☀️" },
  nueves: { label: "Nueves", icon: "🍎" },
  almuerzo: { label: "Almuerzo", icon: "🥘" },
  postre: { label: "Postrecito", icon: "🍮" },
  onces: { label: "Onces", icon: "☕" },
  comida: { label: "Comida", icon: "🌙" }
};

const proteins = [
  "Carne de res magra sudada, 120 g",
  "Pollo sin piel sudado, 120 g",
  "Pescado fresco a la plancha, 120 g",
  "Lomo de cerdo magro sudado, 120 g",
  "Ternera magra sudada, 120 g",
  "Huevo cocido o tibio",
  "Pollo desmechado con verduras"
];

const carbs = [
  "Arroz, 3 a 4 cucharadas",
  "Papa mediana cocida",
  "Yuca pequeña cocida",
  "Plátano pequeño cocido o asado",
  "Arepa mediana",
  "Pasta, 3 a 4 cucharadas",
  "Lentejas, 3 a 4 cucharadas, máximo 1 vez por semana"
];

const vegetables = [
  "Ensalada de pepino, lechuga y zanahoria",
  "Habichuela y zanahoria cocidas",
  "Calabacín salteado con poquito aceite",
  "Ahuyama cocida",
  "Tomate y pepino con limón",
  "Verduras mixtas cocidas",
  "Ensalada grande de hojas suaves"
];

const desserts = [
  { icon: "🍮", title: "Gelatina sin azúcar", desc: "Con fruta picada. Fresca, suave y fácil de rotar." },
  { icon: "🍎", title: "Manzana asada", desc: "Con canela, sin azúcar ni miel." },
  { icon: "🍐", title: "Pera cocida", desc: "Con canela. Buena cuando quiere algo calientico." },
  { icon: "🥭", title: "Papaya picada", desc: "Con goticas de limón. Simple y amable con el estómago." },
  { icon: "🥣", title: "Yogur natural", desc: "Sin azúcar, con fruta y canela." },
  { icon: "🍏", title: "Compota casera", desc: "De manzana, pera o guayaba. Sin azúcar." },
  { icon: "🍌", title: "Banano pequeño", desc: "Machacado con canela. Mejor no todos los días." },
  { icon: "🍓", title: "Fresas con yogur", desc: "Sin azúcar añadida ni salsas dulces." }
];

const market = {
  "Proteínas": ["Pollo sin piel", "Pescado fresco", "Carne magra para sudar", "Lomo de cerdo magro", "Huevos", "Queso bajo en sal", "Yogur/kumis natural sin azúcar"],
  "Carbohidratos": ["Arepas medianas", "Arroz", "Papa", "Yuca", "Plátano", "Tostadas o mogolla integral", "Cereal sin azúcar"],
  "Verduras": ["Zanahoria", "Pepino", "Lechuga", "Tomate", "Calabacín", "Habichuela", "Ahuyama"],
  "Frutas y sabor": ["Papaya", "Manzana", "Pera", "Mandarina", "Banano pequeño", "Guayaba", "Fresas", "Limón", "Cilantro", "Laurel", "Tomillo", "Orégano", "Canela"]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function normalizeDate(date = new Date()) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 10);
}

function dayIndexFromDate(date = new Date()) {
  const idx = date.getDay();
  return idx === 0 ? 6 : idx - 1;
}

function loadData() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function currentTrackDate() {
  return $("#trackDate").value || normalizeDate();
}

function getDayData(date = currentTrackDate()) {
  const data = loadData();
  return data[date] || {
    meals: {},
    mealNotes: {},
    appetite: "",
    energy: "",
    water: 0,
    notes: "",
    alerts: {}
  };
}

function setDayData(date, dayData) {
  const data = loadData();
  data[date] = dayData;
  saveData(data);
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function renderDaySelector() {
  const selector = $("#daySelector");
  selector.innerHTML = days.map((d, i) => `<option value="${i}">${d.name}</option>`).join("");
  selector.value = String(dayIndexFromDate());
  selector.addEventListener("change", () => renderToday(Number(selector.value)));
}

function renderToday(index = dayIndexFromDate()) {
  const day = days[index];
  $("#todayTitle").textContent = `Plan de ${day.name}`;
  $("#todayMeals").innerHTML = Object.entries(day.meals).map(([key, value]) => `
    <article class="meal-card">
      <div class="meal-card__icon">${mealMeta[key].icon}</div>
      <div>
        <h3>${mealMeta[key].label}</h3>
        <p>${value}</p>
      </div>
    </article>
  `).join("");
}

function renderTracker() {
  const date = currentTrackDate();
  const dayData = getDayData(date);
  const container = $("#trackerGrid");
  container.innerHTML = Object.entries(mealMeta).map(([key, meta]) => `
    <article class="track-card">
      <label>
        <input type="checkbox" data-meal="${key}" ${dayData.meals?.[key] ? "checked" : ""} />
        <span>${meta.icon} ${meta.label}</span>
      </label>
      <textarea class="textarea" data-note="${key}" placeholder="Notas de ${meta.label.toLowerCase()}...">${dayData.mealNotes?.[key] || ""}</textarea>
    </article>
  `).join("");

  $("#appetite").value = dayData.appetite || "";
  $("#energy").value = dayData.energy || "";
  $("#water").value = Number(dayData.water || 0);
  $("#notes").value = dayData.notes || "";

  $$('[data-alert]').forEach(input => {
    input.checked = Boolean(dayData.alerts?.[input.dataset.alert]);
  });

  bindTrackerInputs();
  updateScore();
}

function collectDayData() {
  const previous = getDayData();
  const meals = {};
  const mealNotes = {};
  $$('[data-meal]').forEach(input => meals[input.dataset.meal] = input.checked);
  $$('[data-note]').forEach(textarea => mealNotes[textarea.dataset.note] = textarea.value.trim());
  const alerts = {};
  $$('[data-alert]').forEach(input => alerts[input.dataset.alert] = input.checked);
  return {
    ...previous,
    meals,
    mealNotes,
    appetite: $("#appetite").value,
    energy: $("#energy").value,
    water: Math.max(0, Number($("#water").value || 0)),
    notes: $("#notes").value.trim(),
    alerts
  };
}

function bindTrackerInputs() {
  $$('[data-meal], [data-alert], [data-note], #appetite, #energy, #water, #notes').forEach(el => {
    el.oninput = () => {
      setDayData(currentTrackDate(), collectDayData());
      updateScore();
    };
    el.onchange = () => {
      setDayData(currentTrackDate(), collectDayData());
      updateScore();
    };
  });
}

function updateScore() {
  const dayData = getDayData();
  const completed = Object.values(dayData.meals || {}).filter(Boolean).length;
  const alerts = Object.values(dayData.alerts || {}).filter(Boolean).length;
  const water = Number(dayData.water || 0);
  let score = Math.round((completed / Object.keys(mealMeta).length) * 80 + Math.min(water, 6) / 6 * 20 - alerts * 12);
  score = Math.max(0, Math.min(100, score));

  const color = alerts > 0 ? "var(--red)" : score >= 75 ? "var(--green)" : score >= 45 ? "var(--yellow)" : "var(--primary)";
  const deg = Math.round(score / 100 * 360);
  $("#scoreCircle").textContent = `${score}%`;
  $("#scoreCircle").style.background = `conic-gradient(${color} ${deg}deg, #f2e7dd ${deg}deg)`;
  $("#scoreText").textContent = alerts > 0
    ? "Hay alertas del plan. Mañana se corrige, sin novela."
    : score >= 75
      ? "Va muy bien el día. El plan está respirando tranquilo."
      : "Todavía faltan comidas o agua por registrar.";
  $("#statMeals").textContent = `${completed}/6`;
  $("#statWater").textContent = water;
  $("#statAlerts").textContent = alerts;
}

function renderWeeklyMenu() {
  $("#weeklyMenu").innerHTML = days.map(day => `
    <article class="day-card">
      <h3>${day.name}</h3>
      <ul>
        <li><strong>Desayuno:</strong> ${day.meals.desayuno}</li>
        <li><strong>Almuerzo:</strong> ${day.meals.almuerzo}</li>
        <li><strong>Comida:</strong> ${day.meals.comida}</li>
      </ul>
      <div class="dessert-line">🍮 ${day.meals.postre}</div>
    </article>
  `).join("");
}

function populateSelect(selector, items) {
  $(selector).innerHTML = items.map(item => {
    const value = typeof item === "string" ? item : item.title;
    return `<option>${value}</option>`;
  }).join("");
}

function renderPlate() {
  const protein = $("#proteinSelect").value;
  const carb = $("#carbSelect").value;
  const veg = $("#vegSelect").value;
  const dessert = $("#dessertSelect").value;
  $("#plateResult").innerHTML = `
    <h3>Plato sugerido</h3>
    <ul>
      <li><strong>Proteína:</strong> ${protein}</li>
      <li><strong>Carbohidrato:</strong> ${carb}</li>
      <li><strong>Verduras:</strong> ${veg}</li>
      <li><strong>Postre:</strong> ${dessert}</li>
      <li><strong>Bebida:</strong> agua o aromática sin azúcar.</li>
    </ul>
  `;
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPlate() {
  $("#proteinSelect").value = randomFrom(proteins);
  $("#carbSelect").value = randomFrom(carbs);
  $("#vegSelect").value = randomFrom(vegetables);
  $("#dessertSelect").value = randomFrom(desserts).title;
  renderPlate();
}

function renderDesserts() {
  $("#dessertCards").innerHTML = desserts.map(d => `
    <article class="small-card">
      <span>${d.icon}</span>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </article>
  `).join("");
}

function renderMarket() {
  const checked = JSON.parse(localStorage.getItem(MARKET_KEY) || "{}");
  $("#marketGrid").innerHTML = Object.entries(market).map(([group, items]) => `
    <article class="market-list">
      <h3>${group}</h3>
      ${items.map(item => {
        const id = `${group}-${item}`.replace(/\s+/g, "-");
        return `<label><input type="checkbox" data-market="${id}" ${checked[id] ? "checked" : ""}> ${item}</label>`;
      }).join("")}
    </article>
  `).join("");
  $$('[data-market]').forEach(input => {
    input.addEventListener("change", () => {
      const data = JSON.parse(localStorage.getItem(MARKET_KEY) || "{}");
      data[input.dataset.market] = input.checked;
      localStorage.setItem(MARKET_KEY, JSON.stringify(data));
    });
  });
}

async function copyText(text, message = "Copiado") {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    toast(message);
  }
}

function menuAsText() {
  return days.map(day => `${day.name}\n- Desayuno: ${day.meals.desayuno}\n- Almuerzo: ${day.meals.almuerzo}\n- Postre: ${day.meals.postre}\n- Comida: ${day.meals.comida}`).join("\n\n");
}

function marketAsText() {
  return Object.entries(market).map(([group, items]) => `${group}:\n${items.map(i => `- ${i}`).join("\n")}`).join("\n\n");
}

function exportBackup() {
  const data = {
    exportedAt: new Date().toISOString(),
    seguimiento: loadData(),
    mercado: JSON.parse(localStorage.getItem(MARKET_KEY) || "{}")
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nutri-abuelita-backup-${normalizeDate()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast("Backup descargado");
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.seguimiento) localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seguimiento));
      if (data.mercado) localStorage.setItem(MARKET_KEY, JSON.stringify(data.mercado));
      renderTracker();
      renderMarket();
      toast("Backup importado");
    } catch {
      toast("Ese archivo no parece un backup válido");
    }
  };
  reader.readAsText(file);
}

function bindNavigationHighlight() {
  const links = $$(".tabs a");
  const sections = links.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(section => observer.observe(section));
}

function init() {
  $("#trackDate").value = normalizeDate();
  renderDaySelector();
  renderToday();
  renderTracker();
  renderWeeklyMenu();
  renderDesserts();
  renderMarket();

  populateSelect("#proteinSelect", proteins);
  populateSelect("#carbSelect", carbs);
  populateSelect("#vegSelect", vegetables);
  populateSelect("#dessertSelect", desserts);
  renderPlate();

  $("#trackDate").addEventListener("change", renderTracker);
  $("#saveTrack").addEventListener("click", () => {
    setDayData(currentTrackDate(), collectDayData());
    updateScore();
    toast("Seguimiento guardado");
  });
  $("#clearDay").addEventListener("click", () => {
    const data = loadData();
    delete data[currentTrackDate()];
    saveData(data);
    renderTracker();
    toast("Día limpiado");
  });
  $("#randomPlateBtn").addEventListener("click", randomPlate);
  ["#proteinSelect", "#carbSelect", "#vegSelect", "#dessertSelect"].forEach(selector => $(selector).addEventListener("change", renderPlate));
  $("#copyPlateBtn").addEventListener("click", () => copyText($("#plateResult").innerText, "Plato copiado"));
  $("#copyMenuBtn").addEventListener("click", () => copyText(menuAsText(), "Menú semanal copiado"));
  $("#copyMarketBtn").addEventListener("click", () => copyText(marketAsText(), "Lista de mercado copiada"));
  $("#printBtn").addEventListener("click", () => window.print());
  $("#exportBtn").addEventListener("click", exportBackup);
  $("#importFile").addEventListener("change", (e) => e.target.files[0] && importBackup(e.target.files[0]));
  bindNavigationHighlight();
}

init();
