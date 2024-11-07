const checkboxes = document.querySelectorAll('input[type="checkbox"]');
function toggleCheckbox(selected) {
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });
    if (checkedCount === 0) {
        selected.checked = true;
        alert("You must select at least one option!");
    } else {
        checkboxes.forEach((checkbox) => {
            if (checkbox !== selected) {
                checkbox.checked = false;
            }
        });
    }
}
checkboxes.forEach((checkbox, i) => {
    checkbox.addEventListener('change', () => {
        if(i === 0) {
            activeBeauty();
        } else if (i === 1) {
            activeMoney();
        } else if (i === 2) {
            activeUly();
        }
    });
})

const sec = document.querySelectorAll('section');
const activeBeauty = () => {
    sec.forEach(s => {
        if(s.getAttribute('class') === 'one') {
            s.style.display = 'block';
        } else {
            s.style.display = 'none';
        }
    })
}
const activeMoney = () => {
    sec.forEach(s => {
        if(s.getAttribute('class') === 'two') {
            s.style.display = 'block';
        } else {
            s.style.display = 'none';
        }
    })
}

const activeUly = () => {
    sec.forEach(s => {
        if(s.getAttribute('class') === 'three') {
            s.style.display = 'block';
        } else {
            s.style.display = 'none';
        }
    })
}