(function () {
  // -------------------------------------------------------------
  // CONFIGURATION: CHANGE YOUR LINK HERE!
  // -------------------------------------------------------------
  const targetUrl = 'file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/index.html';
  const buttonText = '🚀 VISIT MAIN SITE';
  // -------------------------------------------------------------

  // 1. Inject Google Fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Press+Start+2P&display=swap';
  document.head.appendChild(fontLink);

  // 2. Inject CSS Styles
  const style = document.createElement('style');
  style.innerHTML = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      background: #0b021a !important;
      font-family: 'Fredoka', sans-serif !important;
      color: #fff !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
    }
    .up-glow-purple {
      position: absolute; width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(255, 0, 128, 0.35) 0%, rgba(121, 40, 202, 0.2) 60%, rgba(0,0,0,0) 80%);
      top: 50%; left: 50%; transform: translate(-50%, -50%); filter: blur(80px); z-index: 0;
    }
    .up-glow-cyan {
      position: absolute; width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, rgba(0,0,0,0) 70%);
      top: 30%; left: 70%; filter: blur(70px); z-index: 0;
    }
    .up-badge {
      position: absolute; font-family: 'Press Start 2P', cursive; font-size: 0.75rem;
      padding: 8px 14px; border-radius: 8px; font-weight: bold;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5); z-index: 2;
      animation: up-float 4s ease-in-out infinite alternate;
    }
    .up-wip-1 { top: 15%; right: 18%; background: #00f0ff; color: #0b021a; border: 2px solid #fff; transform: rotate(5deg); }
    .up-wip-2 { bottom: 25%; right: 15%; background: #ff007f; color: #fff; border: 2px solid #fff; transform: rotate(-8deg); animation-delay: -1.5s; }
    .up-soon { bottom: 12%; right: 28%; background: #ffe600; color: #0b021a; border: 2px solid #000; transform: rotate(4deg); animation-delay: -2.5s; }
    .up-fixed { top: 40%; left: 12%; background: #00ff88; color: #0b021a; border: 2px solid #fff; transform: rotate(-12deg); animation-delay: -1s; }
    
    @keyframes up-float {
      0% { transform: translateY(0px) rotate(0deg); }
      100% { transform: translateY(-12px) rotate(4deg); }
    }

    .up-card {
      position: relative; z-index: 3; text-align: center; max-width: 850px; width: 90%;
      padding: 2.5rem 2rem; background: rgba(18, 7, 38, 0.75); border: 2px solid rgba(255, 0, 128, 0.3);
      border-radius: 28px; backdrop-filter: blur(12px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255, 0, 128, 0.2);
    }
    .up-top-tag { font-family: 'Press Start 2P', cursive; font-size: 0.85rem; color: #00f0ff; letter-spacing: 2px; margin-bottom: 1.2rem; text-shadow: 0 0 10px #00f0ff; }
    .up-title { font-size: 3.5rem; line-height: 1.1; font-weight: 900; text-transform: uppercase; margin-bottom: 0.5rem; background: linear-gradient(180deg, #ffffff 0%, #ff69b4 40%, #ff007f 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .up-highlight { display: block; font-size: 4.2rem; background: linear-gradient(180deg, #ffe600 0%, #ff0055 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .up-sub-text { font-size: 1.3rem; color: #e2d5ff; margin: 1.5rem 0 2rem 0; font-weight: 600; }
    .up-sub-text span { color: #ff007f; font-weight: 700; }
    .up-progress-outer { position: relative; width: 100%; height: 38px; background: rgba(0, 0, 0, 0.6); border-radius: 50px; border: 3px solid #00f0ff; padding: 4px; box-shadow: 0 0 20px rgba(0, 240, 255, 0.4); margin-bottom: 2rem; }
    .up-progress-inner { position: relative; height: 100%; width: 65%; background: linear-gradient(90deg, #ff007f 0%, #ff9900 60%, #ffe600 100%); border-radius: 50px; transition: width 0.3s ease; }
    .up-rocket { position: absolute; right: -15px; top: 50%; transform: translateY(-50%) rotate(45deg); font-size: 1.6rem; }

    /* Action Button Styling */
    .up-btn {
      display: inline-block;
      font-family: 'Press Start 2P', cursive;
      font-size: 0.9rem;
      color: #fff;
      text-decoration: none;
      background: linear-gradient(135deg, #ff007f 0%, #7928ca 100%);
      padding: 16px 32px;
      border-radius: 50px;
      border: 2px solid #00f0ff;
      box-shadow: 0 0 20px rgba(255, 0, 128, 0.6), 0 0 10px rgba(0, 240, 255, 0.4);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    .up-btn:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 0 30px rgba(255, 0, 128, 0.9), 0 0 20px rgba(0, 240, 255, 0.8);
      background: linear-gradient(135deg, #00f0ff 0%, #ff007f 100%);
      color: #000;
    }

    .up-sign { position: absolute; bottom: 20px; left: 30px; background: #ffe600; color: #000; padding: 12px 18px; border-radius: 12px; border: 4px solid #000; font-weight: 900; text-transform: uppercase; transform: rotate(-4deg); z-index: 4; }
    .up-sign small { display: block; font-size: 0.65rem; margin-top: 4px; }
    .up-sauce { position: absolute; bottom: 20px; right: 40px; text-align: center; z-index: 4; }
    .up-flask { font-size: 3.5rem; }
    .up-flask-label { font-family: 'Press Start 2P', cursive; font-size: 0.6rem; background: #00f0ff; color: #000; padding: 4px 8px; border-radius: 4px; display: inline-block; }
  `;
  document.head.appendChild(style);

  // 3. Render HTML Structure
  const render = () => {
    document.body.innerHTML = `
      <div class="up-glow-purple"></div>
      <div class="up-glow-cyan"></div>
      <div class="up-badge up-wip-1">WIP</div>
      <div class="up-badge up-wip-2">WIP</div>
      <div class="up-badge up-soon">SOON™</div>
      <div class="up-badge up-fixed">404 FIXED</div>

      <div class="up-card">
        <div class="up-top-tag">⚡ SUPER AWESOME UNFINISHED THING ⚡</div>
        <h1 class="up-title">
          WEBSITE UNDER
          <span class="up-highlight">PROCESSING!</span>
        </h1>
        <p class="up-sub-text">
          <span>HOLD ON</span> tight, the magic is brewing (and things are a bit wild)!
        </p>
        <div class="up-progress-outer">
          <div class="up-progress-inner" id="upBar">
            <div class="up-rocket">🚀</div>
          </div>
        </div>

        <!-- Action Button -->
        <a href="${targetUrl}" class="up-btn">${buttonText}</a>
      </div>

      <div class="up-sign">
        🚨 CONSTRUCTION ZONE!
        <small>(Do Not Cross unless you have pixels)</small>
      </div>

      <div class="up-sauce">
        <div class="up-flask">🧪</div>
        <div class="up-flask-label">CREATIVITY SAUCE</div>
      </div>
    `;

    // 4. Animate Rocket Progress
    const progressBar = document.getElementById('upBar');
    let width = 60;
    let increasing = true;
    setInterval(() => {
      if (width >= 90) increasing = false;
      if (width <= 40) increasing = true;
      width += increasing ? 0.3 : -0.3;
      if (progressBar) progressBar.style.width = width + '%';
    }, 50);
  };

  // Run as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();