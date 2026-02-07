import { info } from '../../src/lib/Info';

const $canvas = document.querySelector('canvas');
const ctx = $canvas?.getContext('2d');

const labels = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'spend month',
      data: [info[0].mount, info[1].mount, info[2].mount],
      fill: false,
      borderColor: 'rgb(75,192,192)',
      tension: 0.1,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff' 
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff' 
        }
      },
      y: {
        ticks: {
          color: '#ffffff' 
        }
      }
    }
  }
};

new Chart(ctx, config);
