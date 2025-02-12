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
    const closeBtn = document.querySelector('#close-filter-sidebar');

    btn.addEventListener('click', () => {
        filter.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        filter.classList.remove('active');
        overlay.classList.remove('active');
    });

    closeBtn.addEventListener('click', () => {
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

// filter header 
// document.addEventListener('DOMContentLoaded', function() {
//   // Main filter category toggle
//   document.querySelectorAll('.filter_item_header').forEach(header => {
//       header.addEventListener('click', function() {
//           this.closest('.filter_item').classList.toggle('active');
//       });
//   });

//   // Expandable items toggle
//   document.querySelectorAll('.item-expand p').forEach(expand => {
//       expand.addEventListener('click', function(e) {
//           e.stopPropagation();
//           const parentItem = this.closest('.item');
//           parentItem.classList.toggle('active');
          
//           // Close other expanded items at the same level
//           const siblings = Array.from(parentItem.parentNode.children)
//                               .filter(child => child !== parentItem);
//           siblings.forEach(sibling => sibling.classList.remove('active'));
//       });
//   });
// });

// Toggle expand
function toggleExpand(event, element) {
  // Stop event from bubbling to parent items
  event.stopPropagation();

  // Toggle the "expanded" class
  element.classList.toggle("active");

  // Update the icon dynamically
  let icon = element.querySelector(".toggle-icon");
  if (icon) {
    icon.textContent = element.classList.contains("expanded") ? "−" : "+";
  }
}

function toggleExpandSpecificItem(event, element){
  event.stopPropagation();

  const parent = element.closest(".item"); 

    if (element.classList.contains("expand")) {
        parent.querySelector(".expand").classList.add("clicked");
        parent.querySelector(".minimize").classList.remove("clicked");
    } else {
        parent.querySelector(".expand").classList.remove("clicked");
        parent.querySelector(".minimize").classList.add("clicked");
    }
}

function toggleExpandSpecificItem2(event, element) {
  event.stopPropagation(); // Prevent unwanted bubbling

  const parent = element.closest(".sub-item"); // Use .item instead of .item-2
  const expandedItems = parent.querySelector(".expanded-items-2"); // Target the expandable section

  if (element.classList.contains("expand-2")) {
    parent.querySelector(".expand-2").classList.add("clicked");
    parent.querySelector(".minimize-2").classList.remove("clicked");
    expandedItems.style.maxHeight = expandedItems.scrollHeight + "px"; // Expand smoothly
} else {
    parent.querySelector(".expand-2").classList.remove("clicked");
    parent.querySelector(".minimize-2").classList.add("clicked");
    expandedItems.style.maxHeight = "0"; // Collapse smoothly
}
}
