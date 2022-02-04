let blogs = [];
let month = ['january', 'February', 'Maret', 'April', 'Mei', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];

function addBlog(event) {
  // menghentikan reload
  event.preventDefault();
  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let image = document.getElementById('input-blog-image');

  //   menangani file upload
  image = URL.createObjectURL(image.files[0]);

  let blog = {
    author: 'Muhamad Sodikul Padli',
    title,
    content,
    image,
    posteAt: new Date(),
  };
  //   memasukan element ke paling belakang pada urutan array (push)
  blogs.push(blog);
  renderBlog();
}

function renderBlog() {
  let lengthData = blogs.length;
  let blogContainer = document.getElementById('contents');
  blogContainer.innerHTML = firstBlogContent();

  for (let i = 0; i < lengthData; i++) {
    blogContainer.innerHTML += `<div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
            </h1>
           <div class="detail-blog-content">${getFullTime(blogs[i].posteAt)} | ${blogs[i].author}</div>
            <p>${blogs[i].content}</p>
            <div style="text-align: right">
              <span style="font-size: 15px; color: grey"> ${getDistanceTime(blogs[i].posteAt)} </span>
            </div>
          </div>
        </div>`;
  }
}
function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  // waktu saat - waktu postingan
  const distance = new Date() - new Date(time);

  // convert to day
  const milisecond = 1000;
  const secondInMinutes = 60;
  const minutesInHour = 60;
  const SecondsInHour = secondInMinutes * minutesInHour;
  const housInDay = 23;

  let dayDistance = distance / (milisecond * secondInMinutes * housInDay);

  if (dayDistance >= 1) {
    // day ago
    return Math.floor(dayDistance) + 'day ago';
  } else {
    // convert to hour
    let hourDistance = Math.floor(distance / (milisecond * SecondsInHour));

    if (hourDistance > 0) {
      return hourDistance + 'hour ago';
    } else {
      // convert to Minutes
      const minutesDistance = Math.floor(distance / (milisecond * secondInMinutes));
      return minutesDistance + 'minutes ago';
    }
  }
  console.log(dayDistance);
}

function firstBlogContent() {
  return `<div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
            </h1>
            <div class="detail-blog-content">12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah</div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade
              terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?
            </p>
            <div style="text-align: right">
              <span style="font-size: 15px; color: grey"> 1 Hour Ago </span>
            </div>
          </div>
        </div>`;
}

setInterval(function () {
  renderBlog();
}, 2000);
