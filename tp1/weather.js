function weatherCallback() {
  const location = document.querySelector('input');
  const url = "https://www.prevision-meteo.ch/services/json/" + location.value;
  fetch(url)
    .then(response => response.json())
    .then(json => buildView(json));
}

function buildView(json) {
  const div = document.querySelector('#data');
  div.innerHTML = '';
  const h1 = document.createElement('p');
  h1.textContent = "Information météorologiques";
  const img = document.createElement('img');
  const ul = document.createElement('ul');
  const li_condition = document.createElement('li');
  li_condition.textContent = json.current_condition.condition;
  const li_temp = document.createElement('li');
  li_temp.textContent = json.current_condition.tmp;
  const li_humidity = document.createElement('li');
  li_humidity.textContent = json.current_condition.humidity;
  ul.appendChild(li_condition);
  ul.appendChild(li_temp);
  ul.appendChild(li_humidity);
  img.src = json.current_condition.icon_big;
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(ul);
}

document.querySelector('button').addEventListener('click', weatherCallback)
