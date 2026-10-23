const grounds = [
  {id:1,name:"Boundary Box Arena",city:"Ahmedabad",area:"Prahlad Nagar",type:"box",price:900,rating:"4.8",emoji:"🏏",art:"green",features:["Floodlights","Parking","Equipment"],size:"6-a-side"},
  {id:2,name:"The Turf Club",city:"Mumbai",area:"Andheri West",type:"turf",price:1400,rating:"4.7",emoji:"🏟️",art:"blue",features:["Changing room","Floodlights","Parking"],size:"8-a-side"},
  {id:3,name:"PowerPlay Cricket Zone",city:"Surat",area:"Vesu",type:"box",price:750,rating:"4.9",emoji:"⚡",art:"purple",features:["Nets","Drinking water","Parking"],size:"6-a-side"}
];
let activeFilter = "all";
const grid = document.getElementById("groundGrid");
const cityInput = document.getElementById("cityInput");
const typeInput = document.getElementById("typeInput");
const sortInput = document.getElementById("sortInput");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const dialog = document.getElementById("infoDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogText = document.getElementById("dialogText");

function showDialog(title, text) {
  dialogTitle.textContent = title;
  dialogText.textContent = text;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else window.alert(title + "\n\n" + text);
}
function filteredGrounds() {
  const city = cityInput.value.trim().toLowerCase();
  const type = typeInput.value === "all" ? activeFilter : typeInput.value;
  let list = grounds.filter(g => (!city || g.city.toLowerCase().includes(city) || g.area.toLowerCase().includes(city)) && (type === "all" || g.type === type));
  if (sortInput.value === "low") list.sort((a,b) => a.price-b.price);
  if (sortInput.value === "high") list.sort((a,b) => b.price-a.price);
  return list;
}
function renderGrounds() {
  const list = filteredGrounds();
  resultCount.textContent = list.length + (list.length === 1 ? " sample ground" : " sample grounds");
  emptyState.classList.toggle("hidden", list.length !== 0);
  grid.classList.toggle("hidden", list.length === 0);
  grid.innerHTML = list.map(g => `
    <article class="ground-card">
      <div class="ground-art ${g.art}"><span class="ground-type">${g.type === "box" ? "BOX CRICKET" : "OPEN TURF"}</span><span class="ground-emoji" aria-hidden="true">${g.emoji}</span></div>
      <div class="ground-body">
        <div class="ground-title-row"><h3>${g.name}</h3><span class="rating">★ ${g.rating}</span></div>
        <p class="ground-location"><span aria-hidden="true">⌖</span> ${g.area}, ${g.city}</p>
        <div class="ground-meta"><span class="meta-pill">${g.size}</span>${g.features.slice(0,2).map(f=>`<span class="meta-pill">${f}</span>`).join("")}</div>
        <div class="ground-footer"><div class="price"><strong>₹${g.price.toLocaleString("en-IN")}</strong> <small>/ hour</small></div><button class="book-btn" data-book="${g.id}">View details →</button></div>
      </div>
    </article>`).join("");
}
document.getElementById("searchForm").addEventListener("submit", event => { event.preventDefault(); activeFilter = "all"; document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c.dataset.filter==="all")); renderGrounds(); document.getElementById("explore").scrollIntoView({behavior:"smooth"}); });
document.querySelectorAll(".chip").forEach(button => button.addEventListener("click", () => { activeFilter = button.dataset.filter; typeInput.value = "all"; document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c===button)); renderGrounds(); }));
typeInput.addEventListener("change", renderGrounds);
sortInput.addEventListener("change", renderGrounds);
grid.addEventListener("click", event => { const button=event.target.closest("[data-book]"); if(!button)return; const ground=grounds.find(g=>g.id===Number(button.dataset.book)); if(ground)showDialog("Booking is coming soon", ground.name+" in "+ground.city+" is a sample listing. Live availability, slot selection and payment will be added in a future build."); });
document.getElementById("resetSearch").addEventListener("click",()=>{cityInput.value="";typeInput.value="all";sortInput.value="recommended";activeFilter="all";document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c.dataset.filter==="all"));renderGrounds();});
document.getElementById("loginBtn").addEventListener("click",()=>showDialog("Member login — coming soon","Account registration and secure login are planned for a future version."));
document.getElementById("ownerBtn").addEventListener("click",()=>showDialog("List your turf — coming soon","Turf-owner registration, venue management and booking dashboards are on our roadmap."));
document.getElementById("closeDialog").addEventListener("click",()=>dialog.close());
document.getElementById("dialogOkay").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
document.getElementById("year").textContent=new Date().getFullYear();
renderGrounds();