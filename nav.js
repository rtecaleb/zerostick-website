// nav.js — include on every page via <script src="/nav.js"></script> (adjust path for subfolders)
// Requires: <div id="navbar"></div> and <footer id="footer"></footer> in the body

(function () {
  const NAV_HTML = `
  <header class="site-header">

    <!-- TOP ROW: Logo | Search | Account + Cart -->
    <div class="nav-top">
      <div class="nav-top-inner">
        <a class="nav-logo" href="/index.html">
          <img src="/images/logo-white.png" alt="ZeroStick" />
        </a>
        <div class="nav-search">
          <span class="nav-search-icon">&#128269;</span>
          <input type="search" placeholder="Search controllers, upgrades..." />
        </div>
        <div class="nav-actions">
          <a href="/account/login.html" class="nav-icon-btn" title="Account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
          </a>
          <a href="/cart.html" class="nav-icon-btn" title="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- BOTTOM ROW: Nav links left | Info links right -->
    <nav class="nav-bottom">
      <div class="nav-bottom-inner">

        <!-- Left: shop nav -->
        <ul class="nav-links">
          <li>
            <a href="/ps5/index.html">PS5 <span class="caret">&#8964;</span></a>
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
            <a href="/services/send-in.html">Services <span class="caret">&#8964;</span></a>
            <div class="dropdown">
              <a href="/services/send-in.html">Controller Send-In</a>
              <a href="/services/warranty.html">Warranty &amp; Repairs</a>
              <a href="/services/returns.html">Returns</a>
            </div>
          </li>
          <li>
            <a href="/extras/accessories.html">Extras <span class="caret">&#8964;</span></a>
            <div class="dropdown">
              <div class="drop-label">Platforms</div>
              <a href="/extras/gamecube.html">GameCube</a>
              <a href="/extras/switch-pro.html">Switch Pro</a>
              <hr>
              <div class="drop-label">Accessories</div>
              <a href="/extras/accessories.html">All Accessories</a>
            </div>
          </li>
        </ul>

        <!-- Right: info links + support button -->
        <div class="nav-info">
          <a href="/what-is-zerostick.html">What is a ZeroStick?</a>
          <a href="/product-updates.html">Product Updates</a>
          <a href="/support.html" class="btn-support">&#128100; Support &amp; FAQ</a>
        </div>

      </div>
    </nav>
  </header>`;

  const FOOTER_HTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/index.html"><img src="/images/logo-white.png" alt="ZeroStick" style="height:34px;width:auto;margin-bottom:16px" /></a>
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
        <div class="social-links" style="flex-direction:column;gap:8px;margin-top:8px">
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

  const navEl = document.getElementById('navbar');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
})();
