fetch("actors.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleActorList(data);
  });

function handleActorList(data) {
  console.log(data);
  data.forEach(showArtist);
}

function showArtist(artist) {
  // console.log(artist);
  //grab the template
  const template = document.querySelector(".artistTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector(".fullname").textContent = artist.fullname;
  copy.querySelector(".movie").textContent = artist.movie;

  //grab parent
  const parent = document.querySelector(".actorlistGrid");

  //append
  parent.appendChild(copy);
}
