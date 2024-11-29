document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
  
    // 動的にプロフィール画像を追加
    const profileImage = document.createElement('img');
    profileImage.src = 'path/to/profile-image.jpg'; // プロフィール画像のパスを指定
    profileImage.alt = 'プロフィール画像';
    document.querySelector('.profile p').appendChild(profileImage);
  
    // プロジェクトを追加する関数
    const addProject = (title, description, duration) => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
  
      const projectTitle = document.createElement('h2');
      projectTitle.textContent = title;
      projectDiv.appendChild(projectTitle);
  
      const projectDescription = document.createElement('p');
      projectDescription.textContent = description;
      projectDiv.appendChild(projectDescription);
  
      const projectDuration = document.createElement('p');
      projectDuration.textContent = `参画期間：${duration}`;
      projectDiv.appendChild(projectDuration);
  
      document.querySelector('.container').appendChild(projectDiv);
    };
  
    // 動的にプロジェクトを追加
    const projects = [
      {
        title: '新しいプロジェクト',
        description: 'このプロジェクトでは、最新の技術を使用して新しい機能を開発しました。',
        duration: '6か月間'
      },
      {
        title: '別のプロジェクト',
        description: 'このプロジェクトでは、チームで協力して大規模なシステムを構築しました。',
        duration: '1年間'
      }
    ];
  
    projects.forEach(project => {
      addProject(project.title, project.description, project.duration);
    });
  });