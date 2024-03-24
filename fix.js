#include <GL/glut.h>

void drawDiamond(int x, int y, int size) {
  // Set warna kuning
  glColor3f(1.0f, 1.0f, 0.0f);

  // Menghitung koordinat titik-titik diamond
  int x1 = x - size, y1 = y;
  int x2 = x, y2 = y - size;
  int x3 = x + size, y3 = y;
  int x4 = x, y4 = y + size;

  // Menggambar garis dengan DDA
  glBegin(GL_LINES);
    glVertex2i(x1, y1);
    glVertex2i(x2, y2);
  glEnd();

  glBegin(GL_LINES);
    glVertex2i(x2, y2);
    glVertex2i(x3, y3);
  glEnd();

  glBegin(GL_LINES);
    glVertex2i(x3, y3);
    glVertex2i(x4, y4);
  glEnd();

  glBegin(GL_LINES);
    glVertex2i(x4, y4);
    glVertex2i(x1, y1);
  glEnd();
}

void display() {
  glClear(GL_COLOR_BUFFER_BIT);

  // Menggambar diamond
  drawDiamond(320, 240, 100);

  glFlush();
}

void init() {
  glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0.0, 640.0, 0.0, 480.0);
}

int main(int argc, char** argv) {
  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
  glutInitWindowSize(640, 480);
  glutInitWindowPosition(100, 100);
  glutCreateWindow("Diamond Kuning - DDA");

  init();
  glutDisplayFunc(display);

  glutMainLoop();

  return 0;
}
