//create a variable for image
let image=document.querySelector('img');
//console.log(image);
let control=document.querySelector('div');
//console.log(control)

//spacing
//define spacing variable
let spacing=document.getElementById('spacing')
spacing.addEventListener('change', handleUpdate);
spacing.addEventListener('mousemove', handleUpdate);


//add an event listener 
spacing.addEventListener('change', handleUpdate);
spacing.addEventListener('mousemove', handleUpdate);


//color changer
//define a color variable
let color=document.getElementById('base');
//add an event listener
color.addEventListener('change', handleUpdate);
color.addEventListener('mousemove', handleUpdate);


//blur
//define a blur variable
let blur=document.getElementById('blur');
//add an event listener
blur.addEventListener('change', handleUpdate);
blur.addEventListener('mousemove', handleUpdate);



function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //selects data-size from html variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);//sets the css property to the html selected with JS
  }
