// nav.js — paste <script src="../nav.js"></script> (adjust path) into every page
// and add <div id="navbar"></div> and <footer id="footer"></footer>

(function () {
  const NAV_HTML = `
  <div class="announce-bar">
    FREE SHIPPING ON ORDERS OVER $100 &nbsp;|&nbsp; USE CODE <strong>ZEROSTICK10</strong> FOR 10% OFF
  </div>
  <nav id="navbar">
    <div class="container nav-inner">
      <a class="nav-logo" href="/index.html"><img src="/images/logo.png" alt="ZeroStick" style="height:130px;width:auto;display:block" /></a>
      <ul class="nav-links">

        <li>
          <a href="/ps5/index.html">PS5 ▾</a>
          <div class="dropdown">
            <div class="drop-label">Shop</div>
            <a href="/ps5/builder.html">Controller Designer</a>
            <a href="/ps5/quick-picks.html">Quick Pick Controllers</a>
            <a href="/ps5/pre-built.html">Pre-Built Controllers</a>
            <hr>
            <div class="drop-label">Info</div>
            <a href="/ps5/remap.html">Remap Instructions</a>
            <a href="/ps5/overclocking.html">Overclocking</a>
            <a href="/ps5/edge-modules.html">DualSense Edge Modules</a>
          </div>
        </li>

        <li>
          <a href="/services/send-in.html">Services ▾</a>
          <div class="dropdown">
            <a href="/services/send-in.html">Controller Send-In</a>
            <a href="/services/warranty.html">Warranty Policy &amp; Repairs</a>
            <a href="/services/returns.html">Returns</a>
          </div>
        </li>

        <li>
          <a href="/extras/accessories.html">Extras ▾</a>
          <div class="dropdown">
            <div class="drop-label">Platforms</div>
            <a href="/extras/gamecube.html">GameCube</a>
            <a href="/extras/switch-pro.html">Switch Pro</a>
            <hr>
            <div class="drop-label">Accessories</div>
            <a href="/extras/accessories.html">All Accessories</a>
          </div>
        </li>

        <li><a href="/what-is-zerostick.html">About</a></li>
        <li><a href="/product-updates.html">Updates</a></li>
        <li><a href="/support.html">Support</a></li>
        <li><a href="/faq.html">FAQ</a></li>

      </ul>
      <div class="nav-right">
        <a href="/account/login.html">Log In</a>
        <a href="/account/register.html">Sign Up</a>
        <a href="/cart.html" class="btn btn-primary nav-cart">Cart (0)</a>
      </div>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/index.html"><img src="/images/logo.png" alt="ZeroStick" style="height:40px;width:auto;margin-bottom:16px" /></a>
        <p>High-performance modified controllers built for speed, precision, and durability. Starting with genuine first-party controllers, upgraded for competitors and everyday players alike.</p>
      </div>
      <div class="footer-col">
        <h4>PS5</h4>
        <ul>
          <li><a href="/ps5/builder.html">Controller Designer</a></li>
          <li><a href="/ps5/quick-picks.html">Quick Picks</a></li>
          <li><a href="/ps5/pre-built.html">Pre-Builts</a></li>
          <li><a href="/ps5/edge-modules.html">Edge Modules</a></li>
          <li><a href="/ps5/remap.html">Remap Instructions</a></li>
          <li><a href="/ps5/overclocking.html">Overclocking</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="/services/send-in.html">Controller Send-In</a></li>
          <li><a href="/services/warranty.html">Warranty &amp; Repairs</a></li>
          <li><a href="/services/returns.html">Returns</a></li>
        </ul>
        <h4 style="margin-top:24px">Extras</h4>
        <ul>
          <li><a href="/extras/gamecube.html">GameCube</a></li>
          <li><a href="/extras/switch-pro.html">Switch Pro</a></li>
          <li><a href="/extras/accessories.html">Accessories</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/what-is-zerostick.html">About ZeroStick</a></li>
          <li><a href="/product-updates.html">Product Updates</a></li>
          <li><a href="/support.html">Support</a></li>
          <li><a href="/faq.html">FAQ</a></li>
          <li><a href="/account/login.html">My Account</a></li>
        </ul>
        <h4 style="margin-top:24px">Follow Us</h4>
        <div class="social-links" style="flex-direction:column;gap:8px;margin-top:0">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
          <a href="#">Twitter / X</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 ZeroStick. All rights reserved.</span>
      <div class="social-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>`;

  // Inject navbar before <body> content
  const navEl = document.getElementById('navbar');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Inject footer
  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const links = document.querySelectorAll('.nav-links > li > a');
  links.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute('href').replace('/index.html',''))) {
      link.parentElement.classList.add('active');
    }
  });
})();
