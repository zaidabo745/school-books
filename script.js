let schoolCounter = 1;
let schoolsData = [];

// إضافة مدرسة جديدة
function addNewSchool() {
    schoolCounter++;
    const schoolsContainer = document.getElementById('schoolsContainer');
    
    const schoolSection = document.createElement('div');
    schoolSection.className = 'school-section';
    schoolSection.setAttribute('data-school-id', schoolCounter);
    
    schoolSection.innerHTML = `
        <button class="remove-school-btn" onclick="removeSchool(${schoolCounter})">×</button>
        <h3>المدرسة رقم ${schoolCounter}</h3>
        <div class="school-inputs">
            <div class="input-group">
                <label>اسم المدرسة:</label>
                <input type="text" class="school-name" placeholder="أدخل اسم المدرسة">
            </div>
            <div class="input-group">
                <label>عدد الطلاب:</label>
                <input type="number" class="