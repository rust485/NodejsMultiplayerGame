PADDING = 9;

class Controller
{
  constructor(socket)
  {
    this.socket = socket;
    this.mouse = { x: null, y: null };
  }

  mouseMoved(mouse)
  {
    this.mouse.x = (mouse.clientX - PADDING > 0) ? mouse.clientX - PADDING : 0;
    this.mouse.y = (mouse.clientY - PADDING > 0) ? mouse.clientY - PADDING : 0;
  }

  click(i)
  {
    var which = (i == 3) ? 'right' : 'left';
    this.socket.emit(which + 'click', { mouse: this.mouse });
  }
}
