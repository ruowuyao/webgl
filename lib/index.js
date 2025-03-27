function initShadow(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
  //创建着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER); //创建顶点着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //创建片元着色器

  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE); //绑定顶点着色器源码
  gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE); //绑定片元着色器源码

  //编译着色器
  gl.compileShader(vertexShader); //编译顶点着色器
  gl.compileShader(fragmentShader); //编译片元着色器

  //创建一个WebGL程序对象
  const program = gl.createProgram(); //创建WebGL程序

  gl.attachShader(program, vertexShader); //将顶点着色器附加到程序对象
  gl.attachShader(program, fragmentShader); //将片元着色器附加到程序对象

  //链接程序对象
  gl.linkProgram(program); //链接程序对象
  //使用程序对象
  gl.useProgram(program); //使用程序对象

  return program;
}
