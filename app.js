const enc = document.getElementById("enc");
let curIdx = 0;
let isDragging = false;
let dragStartY = 0;
let dragY = 0;
let swipeStartX = 0;
let swipeStartY = 0;
let swipeDir = null;
let isOpen = false;

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function priceTxt(v) {
  if (v === null || v === undefined || v === "") return "";
  return `${v} ${CURRENCY}`;
}

function gradBg(cat, i) {
  const g = (GR[cat] || GR.DEFAULT)[i % 4].split(",");
  return `radial-gradient(ellipse at 38% 62%, ${g[0]} 0%, ${g[1]} 100%)`;
}

function countByCat(cat) {
  return FL.filter((f) => f.c === cat).length;
}

function catTitle(id) {
  return (CAT_META[id] && CAT_META[id].title) || "";
}

function applyBrand() {
  document.title = BRAND.name;
  document.getElementById("brand-name").textContent = BRAND.name;
  document.getElementById("brand-sub").textContent = BRAND.sub;
  document.getElementById("nav-count").textContent = `${FL.length} صنف`;
  document.getElementById("mhEyA").textContent = BRAND.heroEy;
  document.getElementById("mhEyB").textContent = BRAND.heroEyAlt;
  document.getElementById("mh-title").innerHTML = BRAND.heroTitleHtml;
  document.getElementById("mhWordDry").textContent = BRAND.heroWordDry;
  document.getElementById("mhWordSauced").textContent = BRAND.heroWordSauced;
  document.getElementById("mhCta").textContent = BRAND.heroCta;
  document.getElementById("mhCta").onclick = () => {
    document.getElementById("tabs").scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

function renderTabs() {
  const inner = document.getElementById("tabs-inner");
  const tabs = [{ c: "ALL", label: "الكل", count: FL.length, color: "rgba(245,240,232,0.4)" }]
    .concat(CAT_ORDER.map((c) => ({
      c,
      label: catTitle(c),
      count: countByCat(c),
      color: CC[c]
    })));

  inner.innerHTML = tabs.map((t, i) => `
    <button class="tab${i === 0 ? " on" : ""}" data-c="${t.c}" style="--tab-c:${t.color}" onclick="switchCat('${t.c}', this)">
      ${esc(t.label)}<span class="tab-ct">${t.count}</span>
    </button>
  `).join("");
}

function badgeHtml(item) {
  if (item.b === "الأفضل مبيعاً") return `<div class="card-badge b-best">الأفضل مبيعاً</div>`;
  if (item.b === "منتج جديد") return `<div class="card-badge b-sig">جديد</div>`;
  if (item.b) return `<div class="card-badge b-best">${esc(item.b)}</div>`;
  return "";
}

function cardHtml(item, gi, idxInCat) {
  const cat = item.c;
  const len = item.n.length;
  const nameSize = len > 18 ? " xs" : len > 12 ? " sm" : "";
  const bgStyle = item.ph
    ? `linear-gradient(0deg, rgba(7,7,7,0.92) 0%, rgba(7,7,7,0.3) 40%, rgba(7,7,7,0) 100%), url('${item.ph}') center/cover`
    : gradBg(cat, idxInCat);

  return `
    <div class="card" onclick="openEnc(${gi})">
      <div class="card-vis" style="background:${bgStyle}"></div>
      <div class="card-ov"></div>
      <div class="card-diag"></div>
      ${badgeHtml(item)}
      <div class="card-idx">${String(gi + 1).padStart(2, "0")}</div>
      <div class="card-dot" style="background:${CC[cat]}"></div>
      <div class="card-body">
        <div class="card-region">${esc(item.o || priceTxt(item.pr))}</div>
        <div class="card-name${nameSize}">${esc(item.n)}</div>
      </div>
    </div>
  `;
}

function buildMenu() {
  const root = document.getElementById("menu-root");
  root.innerHTML = "";

  const allSec = document.createElement("div");
  allSec.className = "cat-sec on";
  allSec.id = "sec-ALL";

  let allHtml = "";
  CAT_ORDER.forEach((cat) => {
    const items = FL.filter((f) => f.c === cat);
    const meta = CAT_META[cat] || { title: "", desc: "" };
    allHtml += `
      <div class="cat-hdr">
        <div>
          <div class="cat-line" style="background:${CC[cat]}"></div>
          <div class="cat-title">${esc(meta.title)}</div>
          <div class="cat-desc">${esc(meta.desc)}</div>
        </div>
        <div class="cat-num">${items.length}</div>
      </div>
      <div class="grid">
        ${items.map((item, idx) => cardHtml(item, FL.indexOf(item), idx)).join("")}
      </div>
    `;
  });
  allSec.innerHTML = allHtml;
  root.appendChild(allSec);

  CAT_ORDER.forEach((cat) => {
    const items = FL.filter((f) => f.c === cat);
    const meta = CAT_META[cat] || { title: "", desc: "" };
    const sec = document.createElement("div");
    sec.className = "cat-sec";
    sec.id = "sec-" + cat;
    sec.innerHTML = `
      <div class="cat-hdr">
        <div>
          <div class="cat-line" style="background:${CC[cat]}"></div>
          <div class="cat-title">${esc(meta.title)}</div>
          <div class="cat-desc">${esc(meta.desc)}</div>
        </div>
        <div class="cat-num">${items.length}</div>
      </div>
      <div class="grid">
        ${items.map((item, idx) => cardHtml(item, FL.indexOf(item), idx)).join("")}
      </div>
    `;
    root.appendChild(sec);
  });
}

function switchCat(cat, el) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  document.querySelectorAll(".cat-sec").forEach((s) => s.classList.remove("on"));
  el.classList.add("on");
  document.getElementById("sec-" + cat).classList.add("on");
  document.getElementById("tabs").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function openEnc(idx) {
  curIdx = idx;
  renderEnc(idx);
  enc.scrollTop = 0;
  enc.style.transition = "none";
  enc.style.transform = "translate(-50%, 100%)";
  isOpen = true;
  requestAnimationFrame(() => {
    enc.style.transition = "transform 0.42s cubic-bezier(0.32,0.72,0,1)";
    enc.style.transform = "translate(-50%, 0)";
  });
  document.body.style.overflow = "hidden";
}

function closeEnc() {
  enc.style.transition = "transform 0.35s cubic-bezier(0.4,0,1,1)";
  enc.style.transform = "translate(-50%, 100%)";
  isOpen = false;
  document.body.style.overflow = "";
}

function renderEnc(idx) {
  const f = FL[idx];
  if (!f) return;
  const cat = f.c;
  const bg = document.getElementById("enc-bg");
  bg.style.background = gradBg(cat, idx);
  bg.style.backgroundImage = "";
  if (f.ph) {
    const img = new Image();
    img.onload = () => {
      bg.style.backgroundImage = `url(${f.ph})`;
      bg.style.backgroundSize = "cover";
      bg.style.backgroundPosition = "center";
    };
    img.src = f.ph;
  }

  const ctag = document.getElementById("enc-cat");
  ctag.textContent = catTitle(cat);
  ctag.style.background = CC[cat] || "var(--gold)";
  ctag.style.color = "#1a1a1a";

  document.getElementById("enc-heat").innerHTML = f.o
    ? `<div class="enc-cal">${esc(f.o)}</div>`
    : "";
  document.getElementById("enc-origin").textContent = f.b || "";
  document.getElementById("enc-title").textContent = f.n;
  document.getElementById("enc-prof").textContent = f.p || "";
  document.getElementById("enc-story").textContent = "";

  const tags = [];
  (f.t || []).forEach((t) => tags.push(t));
  (f.addons || []).forEach((a) => {
    tags.push(a.pr ? `${a.n} +${a.pr} ${CURRENCY}` : a.n);
  });
  document.getElementById("enc-tags").innerHTML = tags.map((t) => `<div class="e-tag">${esc(t)}</div>`).join("");
  document.getElementById("enc-price").textContent = priceTxt(f.pr);
  document.getElementById("enc-price").style.color = "var(--bone)";

  const addonsBox = document.getElementById("enc-addons");
  const addons = f.addons || [];
  if (!addons.length) {
    addonsBox.innerHTML = "";
    addonsBox.previousElementSibling.style.display = "none";
  } else {
    addonsBox.previousElementSibling.style.display = "";
    addonsBox.innerHTML = addons.map((a, i) => `
      <label class="addon-row">
        <span>${esc(a.n)}</span>
        <span>
          +${esc(priceTxt(a.pr))}
          <input type="checkbox" data-addon="${i}">
        </span>
      </label>
    `).join("");
  }
  document.getElementById("enc-note").value = "";
  document.getElementById("enc-qty").textContent = "1";
  updateEncLine();
}

let CART = [];
let encQty = 1;

function chgQty(n) {
  encQty = Math.max(1, (parseInt(document.getElementById("enc-qty").textContent, 10) || 1) + n);
  document.getElementById("enc-qty").textContent = String(encQty);
  updateEncLine();
}

function selectedAddons() {
  const f = FL[curIdx];
  const addons = f.addons || [];
  return [...document.querySelectorAll("#enc-addons input:checked")].map((el) => {
    const a = addons[Number(el.dataset.addon)];
    return a ? { n: a.n, pr: Number(a.pr) || 0 } : null;
  }).filter(Boolean);
}

function linePrice(item, qty, addons) {
  const extra = (addons || []).reduce((s, a) => s + (Number(a.pr) || 0), 0);
  return (Number(item.pr) || 0) * qty + extra * qty;
}

function updateEncLine() {
  const f = FL[curIdx];
  if (!f) return;
  const qty = parseInt(document.getElementById("enc-qty").textContent, 10) || 1;
  document.getElementById("enc-line").textContent = priceTxt(linePrice(f, qty, selectedAddons()));
}

function cartCount() {
  return CART.reduce((s, i) => s + i.qty, 0);
}

function cartTotal() {
  return CART.reduce((s, i) => s + linePrice({ pr: i.pr }, i.qty, i.addons), 0);
}

function refreshCartBar() {
  const bar = document.getElementById("cart-bar");
  const n = cartCount();
  if (!n) {
    bar.classList.remove("on");
    return;
  }
  bar.classList.add("on");
  document.getElementById("cart-bar-count").textContent = n === 1 ? "صنف واحد" : `${n} أصناف`;
  document.getElementById("cart-bar-total").textContent = priceTxt(cartTotal());
}

function addCurrentToCart() {
  const f = FL[curIdx];
  if (!f) return;
  const qty = parseInt(document.getElementById("enc-qty").textContent, 10) || 1;
  const note = document.getElementById("enc-note").value.trim();
  const addons = selectedAddons();
  CART.push({
    id: Date.now(),
    idx: curIdx,
    n: f.n,
    pr: Number(f.pr) || 0,
    qty,
    note,
    addons
  });
  refreshCartBar();
  closeEnc();
}

function renderCartList() {
  const box = document.getElementById("cart-list");
  if (!CART.length) {
    box.innerHTML = `<div class="ask-sub" style="padding:24px 0;text-align:center">السلة فاضية.</div>`;
    document.getElementById("cart-sum").textContent = priceTxt(0);
    return;
  }
  box.innerHTML = CART.map((it) => `
    <div class="cart-item">
      <div class="cart-item-top">
        <div>
          <div class="cart-item-name">${esc(it.n)}</div>
          ${it.note ? `<div class="cart-item-note">ملاحظة: ${esc(it.note)}</div>` : ""}
          ${(it.addons || []).map((a) => `<div class="cart-item-addon">+ ${esc(a.n)}</div>`).join("")}
        </div>
        <div class="all-price">${esc(priceTxt(linePrice({ pr: it.pr }, it.qty, it.addons)))}</div>
      </div>
      <div class="cart-item-bot">
        <div class="qty-box">
          <button class="qty-btn" type="button" onclick="chgCartQty(${it.id},-1)">−</button>
          <div class="qty-n">${it.qty}</div>
          <button class="qty-btn" type="button" onclick="chgCartQty(${it.id},1)">+</button>
        </div>
        <button class="cart-del" type="button" onclick="removeCartItem(${it.id})">حذف</button>
      </div>
    </div>
  `).join("");
  document.getElementById("cart-sum").textContent = priceTxt(cartTotal());
  document.getElementById("ask-sub").textContent =
    `مجموع حسابك ${priceTxt(cartTotal())} · ${cartCount()} ${(cartCount() === 1 ? "صنف" : "أصناف")}. إذا تمام نحدد الطاولة.`;
}

function chgCartQty(id, n) {
  const it = CART.find((x) => x.id === id);
  if (!it) return;
  it.qty = Math.max(1, it.qty + n);
  renderCartList();
  refreshCartBar();
}

function removeCartItem(id) {
  CART = CART.filter((x) => x.id !== id);
  renderCartList();
  refreshCartBar();
  if (!CART.length) closeCart();
}

function showCartStep(name) {
  ["list", "ask", "table", "done"].forEach((s) => {
    document.getElementById("cart-step-" + s).style.display = s === name ? "" : "none";
  });
  document.getElementById("cart-head-title").textContent =
    name === "done" ? "تم" : name === "table" ? "الطاولة" : "طلبك";
}

function openCart() {
  if (!CART.length) return;
  renderCartList();
  showCartStep("list");
  const el = document.getElementById("cart");
  el.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart").classList.remove("open");
  if (!isOpen) document.body.style.overflow = "";
}

function goList() { showCartStep("list"); }
function goAsk() {
  if (!CART.length) return;
  showCartStep("ask");
}
function goTable() { showCartStep("table"); document.getElementById("table-no").focus(); }

function sendOrder() {
  const table = document.getElementById("table-no").value.trim();
  if (!table) {
    document.getElementById("table-no").focus();
    return;
  }
  const order = {
    table,
    total: cartTotal(),
    count: cartCount(),
    items: CART.map((i) => ({ n: i.n, qty: i.qty, note: i.note, addons: i.addons, pr: i.pr })),
    at: new Date().toISOString()
  };
  const prev = JSON.parse(localStorage.getItem("malva-orders") || "[]");
  prev.push(order);
  localStorage.setItem("malva-orders", JSON.stringify(prev));
  document.getElementById("done-table").textContent = table;
  showCartStep("done");
}

function finishOrder() {
  CART = [];
  refreshCartBar();
  closeCart();
  document.getElementById("table-no").value = "";
}

document.addEventListener("change", (e) => {
  if (e.target && e.target.closest && e.target.closest("#enc-addons")) updateEncLine();
});

function navFl(dir) {
  const activeTab = document.querySelector(".tab.on");
  const cat = activeTab ? activeTab.dataset.c : "ALL";
  const pool = cat === "ALL"
    ? FL.map((_, i) => i)
    : FL.reduce((a, f, i) => (f.c === cat ? [...a, i] : a), []);
  const pos = pool.indexOf(curIdx);
  const newPos = (pos + dir + pool.length) % pool.length;

  const body = enc.querySelector(".enc-body");
  const heroFoot = enc.querySelector(".enc-foot");
  const bgEl = document.getElementById("enc-photo");
  const slideValue = dir === 1 ? "100%" : "-100%";
  const entryValue = dir === 1 ? "-100%" : "100%";

  [body, heroFoot, bgEl].forEach((el) => {
    el.style.transition = "transform 0.16s cubic-bezier(0.4,0,0.2,1), opacity 0.16s ease";
    el.style.transform = `translateX(${slideValue})`;
    el.style.opacity = "0";
  });

  setTimeout(() => {
    curIdx = pool[newPos];
    renderEnc(curIdx);
    enc.scrollTop = 0;
    [body, heroFoot, bgEl].forEach((el) => {
      el.style.transition = "none";
      el.style.transform = `translateX(${entryValue})`;
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        [body, heroFoot, bgEl].forEach((el) => {
          el.style.transition = "transform 0.3s cubic-bezier(0.32,0.72,0,1), opacity 0.3s ease";
          el.style.transform = "translateX(0)";
          el.style.opacity = "1";
        });
      });
    });
  }, 160);
}

enc.addEventListener("touchstart", (e) => {
  dragStartY = e.touches[0].clientY;
  dragY = 0;
  isDragging = enc.scrollTop === 0;
  swipeStartX = e.touches[0].clientX;
  swipeStartY = e.touches[0].clientY;
  swipeDir = null;
  if (isDragging) enc.style.transition = "none";
}, { passive: true });

enc.addEventListener("touchmove", (e) => {
  const dx = e.touches[0].clientX - swipeStartX;
  const dy = e.touches[0].clientY - swipeStartY;
  if (!swipeDir && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
    swipeDir = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
  }
  if (swipeDir === "v" && isDragging) {
    dragY = e.touches[0].clientY - dragStartY;
    if (dragY > 0) {
      e.preventDefault();
      enc.style.transform = `translate(-50%, ${Math.pow(dragY, 0.82)}px)`;
    }
  }
}, { passive: false });

enc.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - swipeStartX;
  if (swipeDir === "v") {
    if (dragY > 88) closeEnc();
    else {
      enc.style.transition = "transform 0.3s cubic-bezier(0.32,0.72,0,1)";
      enc.style.transform = "translate(-50%, 0)";
    }
  } else if (swipeDir === "h") {
    if (dx > 50) navFl(1);
    else if (dx < -50) navFl(-1);
  }
  isDragging = false;
  dragY = 0;
}, { passive: true });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (document.getElementById("cart").classList.contains("open")) {
      closeCart();
      return;
    }
    if (isOpen) closeEnc();
    return;
  }
  if (!isOpen) return;
  if (e.key === "ArrowLeft") navFl(1);
  if (e.key === "ArrowRight") navFl(-1);
});

applyBrand();
renderTabs();
buildMenu();
