window.onload = function () {
    slideMin();
    slideMax();
    priceInputMin.addEventListener('input', setMinInput);
    priceInputMax.addEventListener('input', setMaxInput);
  };
  
  const minVal = document.querySelector(".min-val");
  const maxVal = document.querySelector(".max-val");
  const priceInputMin = document.querySelector(".min-input");
  const priceInputMax = document.querySelector(".max-input");
  const minTooltip1 = document.querySelector(".min-tooltip1");
  const maxTooltip1 = document.querySelector(".max-tooltip1");
  const minGap = 0;
  const range = document.querySelector(".slider-track");
  const sliderMinValue = parseInt(minVal.min);
  const sliderMaxValue = parseInt(maxVal.max);
  
  function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
      minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip1.innerHTML = "$" + minVal.value;
    priceInputMin.value = minVal.value;
    setArea();
  }
  
  function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
      maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip1.innerHTML = "$" + maxVal.value;
    priceInputMax.value = maxVal.value;
    setArea();
  }
  
  function setArea() {
    range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    minTooltip1.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
    maxTooltip1.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
  }
  
  function setMinInput() {
    let minPrice = parseInt(priceInputMin.value);
    if (minPrice < sliderMinValue) {
      priceInputMin.value = sliderMinValue;
    } else if (minPrice > parseInt(maxVal.value)) {
      priceInputMin.value = maxVal.value;
    }
    minVal.value = priceInputMin.value;
    slideMin();
  }
  
  function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value);
    if (maxPrice > sliderMaxValue) {
      priceInputMax.value = sliderMaxValue;
    } else if (maxPrice < parseInt(minVal.value)) {
      priceInputMax.value = minVal.value;
    }
    maxVal.value = priceInputMax.value;
    slideMax();
  }
  
  // Filter toggle
  document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.createElement('div');
    filterToggle.className = 'filter-overlay';
    document.body.appendChild(filterToggle);
    
    const btn = document.querySelector('.filter-container');
    const filter = document.querySelector('.filter');
    const overlay = document.querySelector('.filter-overlay');

    btn.addEventListener('click', () => {
        filter.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        filter.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close filter when window is resized above 992px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            filter.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});