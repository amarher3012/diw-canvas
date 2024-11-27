const canvas = document.querySelectorAll('canvas');

// Ejercicio 1
const ex1 = canvas[0].getContext('2d');

ex1.moveTo(50, 50);
ex1.lineTo(350, 350);
ex1.strokeStyle = 'red';
ex1.lineWidth = 5;
ex1.stroke();

// Ejercicio 2
const ex2 = canvas[1].getContext('2d');

ex2.rect(50, 50, 150, 100);
ex2.strokeStyle = 'blue';
ex2.lineWidth = 5;
ex2.stroke();

// Ejercicio 3
const ex3 = canvas[2].getContext('2d');

ex3.fillStyle = 'green';
ex3.fillRect(50, 50, 150, 100);

// Ejercicio 4
const ex4 = canvas[3].getContext('2d');

ex4.beginPath();
ex4.strokeStyle = 'red';
ex4.lineWidth = 2;
ex4.arc(200, 200, 100, 0, 2 * Math.PI);
ex4.stroke();

// Ejercicio 5
const ex5 = canvas[4].getContext('2d');

ex5.beginPath();
ex5.strokeStyle = 'red';
ex5.lineWidth = 2;
ex5.arc(200, 200, 100, 0, 2 * Math.PI);
ex5.fillStyle = 'red';
ex5.fill();
ex5.stroke();

// Ejercicio 6
const ex6 = canvas[5].getContext('2d');

ex6.beginPath();
ex6.strokeStyle = 'blue';
ex6.lineWidth = 2;
ex6.ellipse(200, 100, 100, 60, 0, 0, 2 * Math.PI);
ex6.stroke();

// Ejercicio 7
const ex7 = canvas[6].getContext('2d');

ex7.beginPath();
ex7.strokeStyle = 'red';
ex7.lineWidth = 2;
ex7.ellipse(200, 100, 100, 60, 0, 0, 2 * Math.PI);
ex7.fillStyle = 'red';
ex7.fill();
ex7.stroke();

// Ejercicio 8
const ex8 = canvas[7].getContext('2d');

ex8.beginPath();
ex8.strokeStyle = 'green';
ex8.lineWidth = 5;
ex8.moveTo(50, 50);
ex8.lineTo(200, 50);
ex8.lineTo(50, 150);
ex8.closePath();
ex8.stroke();

// Ejercicio 9
const ex9 = canvas[8].getContext('2d');

ex9.beginPath();
ex9.strokeStyle = 'blue';
ex9.lineWidth = 5;
ex9.moveTo(50, 50);
ex9.lineTo(200, 50);
ex9.lineTo(50, 150);
ex9.closePath();
ex9.fillStyle = 'blue';
ex9.fill();
ex9.stroke();

// Ejercicio 10
const ex10 = canvas[9].getContext('2d');

ex10.font = 'bold 40px Arial';
ex10.fillStyle = 'blue';
const text = 'Ejercicio Final';
const textWidth = ex10.measureText(text).width;
const textHeight = 40;
const xPosition = 10;
const yPosition = (canvas[9].height - textHeight) / 2 + textHeight;
ex10.fillText(text, xPosition, yPosition);
