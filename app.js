 const bar= document.getElementById('bar');
 const nav= document.getElementById('navbar');
 const close= document.getElementById('close');


 if (bar) {
    bar.addEventListener('click', ()=>{
            nav.classList.add('active');
    })
 }
 if (close) {
    close.addEventListener('click', ()=>{
            nav.classList.remove('active');
    })
 }







// //  
// const imageList = [
//   'asset/product/f1.jpg',
//   'asset/product/f2.jpg',
//   'asset/product/f3.jpg',
//   'asset/product/f4.jpg',
//   'asset/product/f5.jpg'
// //   'images/image2.jpg',
// //   'images/image3.jpg',
// //   'images/image4.jpg'
// ];

// let currentIndex = 1;

// const imgElement = document.getElementById('clickableImage');

// imgElement.addEventListener('click', function () {
//   currentIndex++;

//   // Loop back to the first image if at the end
//   if (currentIndex >= imageList.length) {
//     currentIndex = 0;
//   }

//   imgElement.src = imageList[currentIndex];
// });
