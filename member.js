function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member-skills');
  const memberSkillsList = document.querySelector('.member-skills-list');
  const memberSkillsItem = document.querySelectorAll('.member-skills-item');

  if (member && memberSkills && memberSkillsList && memberSkillsItem) {
    member.addEventListener('click', () => {
      memberSkills.classList.toggle('active');
    });

    memberSkillsItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }
}