class WindowManager
{
  constructor(canvas, win)
  {
    this.ctx = canvas.getContext('2d');
    this.win = win;
  }

  render(items)
  {
    var c = this.ctx;
    c.clearRect(0, 0, this.win.x, this.win.y);
    items.forEach(function(i)
    {
      c.beginPath();
      c.arc(i.position.x, i.position.y, i.radius, 0, 2 * Math.PI, false);
      c.fillStyle = i.color;
      c.fill();
      c.lineWidth = 1;
      c.strokeStyle = 'black';
      c.stroke();
    });
  }
}
