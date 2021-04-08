export default class Particle {
  constructor(x, y, ctx, mouse) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.mouse = mouse;
    this.size = 3; // radius
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 40 + 5; // 'weight'
  }

  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  /**
   * @author root
   * @time Fri 02 Oct 2020 14:08:17 +04
   *
   * update particle location when mouse is nearby
   */
  update() {
    let dx = this.mouse.x - this.x;
    let dy = this.mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = this.mouse.radius;
    let force = (maxDistance - distance) / maxDistance; // TODO: Newton's law
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < this.mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 5;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 5;
      }
    }
  }
}
