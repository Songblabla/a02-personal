document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Get form elements
        const name = document.getElementById('name').value.trim();
        const tel = document.getElementById('tel').value.trim();
        const members = document.getElementById('members').value;
        const selfTicket = document.getElementById('self-ticket').checked;

        // Validate name and tel
        if (!name || !tel) {
            alert('กรุณากรอกชื่อผู้ติดต่อและเบอร์ผู้ติดต่อ');
            return;
        }

        // Validate members
        const membersNumber = Number(members);
        if (isNaN(membersNumber) || membersNumber < 1 || membersNumber > 15) {
            alert('จำนวนผู้ร่วมเดินทางต้องเป็นตัวเลขระหว่าง 1 ถึง 15');
            return;
        }

        // Confirm self-ticket selection
        if (selfTicket) {
            const confirmSelfTicket = confirm('ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่');
            if (confirmSelfTicket) {
                alert('คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง');
            } else {
                return;
            }
        }

        // If all validations pass, submit the form
        form.submit();
    });
});
