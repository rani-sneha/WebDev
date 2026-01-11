
// app.js
// Single-page Login ↔ Sign Up toggle, purely UI.
// No localStorage, no auth—just validation + friendly messages.

(function () {
  "use strict";

  // Helpers
  function qs(id) { return document.getElementById(id); }
  function setBusy(btn, busy, busyText, normalText) {
    if (!btn) return;
    btn.disabled = !!busy;
    btn.textContent = busy ? busyText : normalText;
  }
  function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

  // Panels & Tabs
  var tabLogin = qs("tabLogin");
  var tabSignup = qs("tabSignup");
  var panelLogin = qs("panelLogin");
  var panelSignup = qs("panelSignup");
  var linkToSignup = qs("linkToSignup");
  var linkToLogin = qs("linkToLogin");

  function showPanel(which) {
    var isLogin = (which === "login");
    if (panelLogin && panelSignup) {
      panelLogin.classList.toggle("active", isLogin);
      panelSignup.classList.toggle("active", !isLogin);
    }
    if (tabLogin && tabSignup) {
      tabLogin.classList.toggle("active", isLogin);
      tabSignup.classList.toggle("active", !isLogin);
    }
    // Move focus to first input for accessibility
    setTimeout(function(){
      var targetInput = isLogin ? qs("login-username") : qs("signup-username");
      if (targetInput) targetInput.focus();
    }, 50);
    // Update hash (optional deep-link)
    try { location.hash = isLogin ? "#login" : "#signup"; } catch (_) {}
  }

  // Tab interactions
  if (tabLogin) tabLogin.addEventListener("click", function(){ showPanel("login"); });
  if (tabSignup) tabSignup.addEventListener("click", function(){ showPanel("signup"); });
  if (linkToSignup) linkToSignup.addEventListener("click", function(){ showPanel("signup"); });
  if (linkToLogin) linkToLogin.addEventListener("click", function(){ showPanel("login"); });

  // Deep-link via hash (#login or #signup)
  (function initFromHash() {
    var h = (location.hash || "").toLowerCase();
    if (h === "#signup") showPanel("signup");
    else showPanel("login");
  })();

  // —— LOGIN (UI-only) ——
  var loginForm = qs("loginForm");
  var loginErr = qs("loginErr");
  var loginBtn = qs("loginBtn");
  var loginUserEl = qs("login-username");
  var loginPassEl = qs("login-password");
  var createdHint = qs("createdHint");

  function setLoginError(msg) { if (loginErr) loginErr.textContent = msg || ""; }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      setLoginError("");

      var username = (loginUserEl && loginUserEl.value ? loginUserEl.value : "").trim();
      var password = (loginPassEl && loginPassEl.value ? loginPassEl.value : "");

      if (!username || !password) { setLoginError("Please enter both username and password."); return; }
      if (username.length < 3 || password.length < 6) {
        setLoginError("Username must be 3+ and password 6+ characters.");
        return;
      }

      setBusy(loginBtn, true, "Signing in…", "Sign in");

      // UI-only: just show a message—no auth performed
      alert("Login submitted (UI-only).");

      setBusy(loginBtn, false, "", "Sign in");
    });
  }

  // —— SIGN UP (UI-only) ——
  var signupForm = qs("signupForm");
  var signupErr = qs("signupErr");
  var signupBtn = qs("signupBtn");
  var signupUserEl = qs("signup-username");
  var signupEmailEl = qs("signup-email");
  var signupPassEl = qs("signup-password");
  var signupConfirmEl = qs("signup-confirm");

  function setSignupError(msg) { if (signupErr) signupErr.textContent = msg || ""; }

  function validateSignup() {
    setSignupError("");
    var username = (signupUserEl && signupUserEl.value ? signupUserEl.value : "").trim();
    var email = (signupEmailEl && signupEmailEl.value ? signupEmailEl.value : "").trim();
    var password = (signupPassEl && signupPassEl.value ? signupPassEl.value : "");
    var confirm = (signupConfirmEl && signupConfirmEl.value ? signupConfirmEl.value : "");

    if (!/^[a-zA-Z0-9._-]{3,}$/.test(username)) { setSignupError("Username: letters/numbers/._- only (min 3)."); return false; }
    if (email && !isValidEmail(email)) { setSignupError("Please enter a valid email address."); return false; }
    if (password.length < 6) { setSignupError("Password must be at least 6 characters."); return false; }
    if (confirm !== password) { setSignupError("Passwords do not match."); return false; }
    return true;
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateSignup()) return;

      setBusy(signupBtn, true, "Creating…", "Create account");

      // UI-only: show success, switch to Login, prefill username & hint
      alert("Sign up submitted (UI-only).");
      showPanel("login");
      if (createdHint) {
        createdHint.textContent = 'Account created. Please log in as "' + signupUserEl.value.trim() + '".';
      }
      if (loginUserEl) loginUserEl.value = signupUserEl.value.trim();

      setBusy(signupBtn, false, "", "Create account");
    });
  }

})();
