// Product catalogue — static data, no backend needed
const PRODUCTS = [
  {
    id: 1, name: "บอดี้สูทลายหมี", nameEn: "Bear Romper",
    price: 390, oldPrice: 490,
    badge: "ขายดี", badgeType: "",
    age: "0-3m", cat: "romper", gender: "unisex",
    rating: 4.9, reviews: 128,
    colors: ["#F9A8C9","#93C5FD","#FFFFFF"],
    img: "https://placehold.co/400x400/FDE8F2/E879A0?text=🐻+บอดี้สูท",
    organic: true
  },
  {
    id: 2, name: "ชุดนอนสีชมพูดาว", nameEn: "Star Sleepsuit",
    price: 450, oldPrice: null,
    badge: "ใหม่", badgeType: "new",
    age: "3-6m", cat: "sleep", gender: "girl",
    rating: 5.0, reviews: 43,
    colors: ["#F9A8C9","#FCD34D"],
    img: "https://placehold.co/400x400/FFF0F7/F9A8C9?text=🌙+ชุดนอน",
    organic: true
  },
  {
    id: 3, name: "ชุดกางเกงลายยีราฟ", nameEn: "Giraffe Set",
    price: 520, oldPrice: 620,
    badge: "ลด 16%", badgeType: "sale",
    age: "6-12m", cat: "bottom", gender: "unisex",
    rating: 4.8, reviews: 87,
    colors: ["#FCD34D","#FFFFFF"],
    img: "https://placehold.co/400x400/FFFBEB/FCD34D?text=🦒+กางเกง",
    organic: true
  },
  {
    id: 4, name: "ชุดของขวัญเซ็ต 4 ชิ้น", nameEn: "Gift Set 4pcs",
    price: 1290, oldPrice: null,
    badge: "ออร์แกนิค", badgeType: "organic",
    age: "0-3m", cat: "gift", gender: "unisex",
    rating: 5.0, reviews: 215,
    colors: ["#F9A8C9","#93C5FD","#FCD34D"],
    img: "https://placehold.co/400x400/F0FDF4/6EE7B7?text=🎁+Gift+Set",
    organic: true
  },
  {
    id: 5, name: "เสื้อแขนยาวลายดาว", nameEn: "Star Long Sleeve",
    price: 290, oldPrice: null,
    badge: "ใหม่", badgeType: "new",
    age: "1-2y", cat: "top", gender: "unisex",
    rating: 4.7, reviews: 56,
    colors: ["#93C5FD","#FFFFFF","#F9A8C9"],
    img: "https://placehold.co/400x400/EFF6FF/93C5FD?text=⭐+เสื้อ",
    organic: true
  },
  {
    id: 6, name: "หมวกถุงเท้าเซ็ต", nameEn: "Hat & Socks Set",
    price: 199, oldPrice: 250,
    badge: "ลด 20%", badgeType: "sale",
    age: "0-3m", cat: "acc", gender: "unisex",
    rating: 4.9, reviews: 192,
    colors: ["#F9A8C9","#93C5FD","#FCD34D","#6EE7B7"],
    img: "https://placehold.co/400x400/F5F3FF/A78BFA?text=🧢+หมวก",
    organic: false
  },
  {
    id: 7, name: "โรมเปอร์ลายดอกไม้", nameEn: "Floral Romper",
    price: 420, oldPrice: null,
    badge: "ขายดี", badgeType: "",
    age: "3-6m", cat: "romper", gender: "girl",
    rating: 4.9, reviews: 104,
    colors: ["#F9A8C9","#FFFFFF"],
    img: "https://placehold.co/400x400/FDE8F2/E879A0?text=🌸+โรมเปอร์",
    organic: true
  },
  {
    id: 8, name: "ชุดนอนไดโนเสาร์", nameEn: "Dino Sleepsuit",
    price: 480, oldPrice: null,
    badge: "ใหม่", badgeType: "new",
    age: "6-12m", cat: "sleep", gender: "boy",
    rating: 4.8, reviews: 38,
    colors: ["#6EE7B7","#FFFFFF"],
    img: "https://placehold.co/400x400/F0FDF4/6EE7B7?text=🦕+ชุดนอน",
    organic: true
  },
  {
    id: 9, name: "เซ็ตเสื้อ+กางเกง 2 ชิ้น", nameEn: "Top+Bottom Set",
    price: 590, oldPrice: 690,
    badge: "ลด 14%", badgeType: "sale",
    age: "1-2y", cat: "top", gender: "unisex",
    rating: 4.7, reviews: 71,
    colors: ["#FCD34D","#93C5FD","#F9A8C9"],
    img: "https://placehold.co/400x400/FFFBEB/FCD34D?text=👕+เซ็ต",
    organic: true
  },
  {
    id: 10, name: "กางเกงผ้าออร์แกนิคขายาว", nameEn: "Organic Long Pants",
    price: 320, oldPrice: null,
    badge: "ออร์แกนิค", badgeType: "organic",
    age: "2-3y", cat: "bottom", gender: "unisex",
    rating: 4.8, reviews: 63,
    colors: ["#93C5FD","#6EE7B7","#FFFFFF"],
    img: "https://placehold.co/400x400/EFF6FF/93C5FD?text=👖+กางเกง",
    organic: true
  },
  {
    id: 11, name: "ชุดของขวัญวันเกิด", nameEn: "Birthday Gift Box",
    price: 890, oldPrice: null,
    badge: "ขายดี", badgeType: "",
    age: "6-12m", cat: "gift", gender: "unisex",
    rating: 5.0, reviews: 89,
    colors: ["#F9A8C9","#FCD34D","#93C5FD"],
    img: "https://placehold.co/400x400/FFF9F0/FCD34D?text=🎂+ของขวัญ",
    organic: true
  },
  {
    id: 12, name: "บอดี้สูทแขนสั้นลายแมว", nameEn: "Cat Bodysuit",
    price: 350, oldPrice: 420,
    badge: "ลด 17%", badgeType: "sale",
    age: "3-6m", cat: "romper", gender: "girl",
    rating: 4.9, reviews: 147,
    colors: ["#F9A8C9","#FFFFFF"],
    img: "https://placehold.co/400x400/FDE8F2/F9A8C9?text=🐱+บอดี้สูท",
    organic: true
  }
];

// Render a single product card
function productCardHTML(p) {
  const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  const badgeClass = p.badgeType ? `product-badge ${p.badgeType}` : 'product-badge';
  const priceOld = p.oldPrice ? `<span class="product-price-old">฿${p.oldPrice.toLocaleString()}</span>` : '';
  const colorDots = p.colors.map(c =>
    `<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${c};border:1.5px solid rgba(0,0,0,0.1);"></span>`
  ).join('');

  return `
  <article class="product-card" itemscope itemtype="https://schema.org/Product">
    <a href="#" aria-label="${p.name}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name} - ลูกน้อย Shop" loading="lazy" itemprop="image" />
        <span class="${badgeClass}">${p.badge}</span>
        <button class="product-wishlist" aria-label="บันทึก ${p.name}" onclick="event.preventDefault();toggleWishlist(this)">🤍</button>
      </div>
    </a>
    <div class="product-info">
      <h3 class="product-name" itemprop="name">${p.name}</h3>
      <div class="product-meta">
        <span class="product-stars" aria-label="${p.rating} ดาว">${stars}</span>
        <span>(${p.reviews})</span>
        <span>·</span>
        <span>👶 ${p.age}</span>
        ${p.organic ? '<span>· 🌿</span>' : ''}
      </div>
      <div style="display:flex;gap:4px;margin-bottom:12px;">${colorDots}</div>
      <div class="product-bottom">
        <div>
          ${priceOld}
          <span class="product-price" itemprop="price" content="${p.price}">฿${p.price.toLocaleString()}</span>
        </div>
        <button class="add-cart-btn" onclick="addToCart(${p.id})" aria-label="เพิ่ม ${p.name} ในตะกร้า">
          + ตะกร้า
        </button>
      </div>
    </div>
  </article>`;
}

// Render bestsellers on homepage (first 4)
function renderBestsellers() {
  const grid = document.getElementById('bestsellerGrid');
  if (!grid) return;
  const top = PRODUCTS.filter(p => p.badge === 'ขายดี' || p.rating >= 4.9).slice(0, 4);
  grid.innerHTML = top.map(p => productCardHTML(p)).join('');
}

// Render new arrivals on homepage
function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;
  const newest = PRODUCTS.filter(p => p.badgeType === 'new').slice(0, 4);
  grid.innerHTML = newest.map(p => productCardHTML(p)).join('');
}

// Cart state
let cart = JSON.parse(localStorage.getItem('luknoi_cart') || '[]');

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  localStorage.setItem('luknoi_cart', JSON.stringify(cart));
  updateCartCount();
  showAddedFeedback();
}

function updateCartCount() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

function showAddedFeedback() {
  const toast = document.createElement('div');
  toast.textContent = '✅ เพิ่มลงตะกร้าแล้ว!';
  toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#065F46;color:white;padding:12px 24px;border-radius:50px;font-size:14px;font-weight:600;z-index:9999;animation:fadeInUp 0.3s ease;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function toggleWishlist(btn) {
  btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
}

// Init on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderBestsellers();
  renderNewArrivals();
});
