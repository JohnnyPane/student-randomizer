$(document).ready(function() {
  let check = true;
  $('#switch').click(function() {
    if (check) {
      $('#fortune').css('display', 'inline');
      $('#normal').css('display', 'none');
      check = false;
    } else {
      $('#fortune').css('display', 'none');
      $('#normal').css('display', 'inline');
      check = true;
    }
  });

  let classroom;
  let current;
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  classroom = [
    "Muktar Ahmed",
    "Nahom Assefa",
    "Michael Bahl",
    "Jojo Bautista",
    "Evan Carlson",
    "Derek Clark",
    "Adair Conlin",
    "Tavian Dawson",
    "Bryan Durushia",
    "Ronya Gettis",
    "Adam Gondorchin",
    "Kieran Hannagan",
    "Abdinasir Hassan",
    "Greg Lanctot",
    "William Lower",
    "Abdirizak Mahomed",
    "Daniel Maldonado",
    "Andrew Mcneal",
    "Krista Meyer",
    "Molly Montgomery",
    "Mahdi Moussa",
    "Zeeshan Mufti",
    "Oscar Narvaez-claman",
    "Sophia Nguyen",
    "Henry Olson",
    "Fernando Ortega",
    "Joshua Schermann",
    "Edison Simondet",
    "Raymond Spartz",
    "Christopher Speltz",
    "Shaun Sticka",
    "Michael Tackett",
    "Michael Wegter",
    "Maxwell Winter",
    "Alexander Wu",
  ];
  current = 0;
  console.log(classroom);
  $('#student').hide();
  $('#random').click(function() {
    current = 0;
    shuffle(classroom);
    console.log(classroom);
    $('#student').show();
    $('#student').text(classroom[current] + ': ' + current + 1);
    $('#random').addClass('animated bounceOutUp');
    setTimeout(function() {
      $('#random').hide();
    }, 1000);
  });

  $('#student').click(function() {
    if (current === classroom.length - 1) {
      $('#student').addClass('animated bounceOutRight');
      current = 0;
      shuffle(classroom);
      console.log(classroom);
      localStorage.setItem('classroom', JSON.stringify(classroom));
      localStorage.setItem('current', JSON.stringify(current));
      setTimeout(function() {
        $('#student').removeClass('animated bounceOutRight');
        $('#student').text(classroom[current] + ': ' + (current + 1));
        $('#student').addClass('animated bounceInLeft');
        setTimeout(function() {
          $('#student').removeClass('animated bounceInLeft');
        }, 2000);
      }, 350);
    } else {
      current++;
      $('#student').text(classroom[current] + ': ' + (current + 1));
      localStorage.setItem('classroom', JSON.stringify(classroom));
      localStorage.setItem('current', JSON.stringify(current));
    }
  });

  var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20(); //category20c()
  //randomNumbers = getRandomNumbers();

  //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

  var data = [
    {
      label: "Muktar Ahmed",
      value: "",
      question: "Muktar Ahmed",
    },
    {
      label: "Nahom Assefa",
      value: "",
      question: "Nahom Assefa",
    },
    {
      label: "Michael Bahl",
      value: "",
      question: "Michael Bahl",
    },
    {
      label: "Jojo Bautista",
      value: "",
      question: "Jojo Bautista",
    },
    {
      label: "Evan Carlson",
      value: "",
      question: "Evan Carlson",
    },
    {
      label: "Derek Clark",
      value: "",
      question: "Derek Clark",
    },
    {
      label: "Adair Conlin",
      value: "",
      question: "Adair Conlin",
    },
    {
      label: "Tavian Dawson",
      value: "",
      question: "Tavian Dawson",
    },
    {
      label: "Bryan Durushia",
      value: "",
      question: "Bryan Durushia",
    },
    {
      label: "Ronya Gettis",
      value: "",
      question: "Ronya Gettis",
    },
    {
      label: "Adam Gondorchin",
      value: "",
      question: "Adam Gondorchin",
    },
    {
      label: "Kieran Hannagan",
      value: "",
      question: "Kieran Hannagan",
    },
    {
      label: "Abdinasir Hassan",
      value: "",
      question: "Abdinasir Hassan",
    },
    {
      label: "Greg Lanctot",
      value: "",
      question: "Greg Lanctot",
    },
    {
      label: "William Lower",
      value: "",
      question: "William Lower",
    },
    {
      label: "Abdirizak Mahomed",
      value: "",
      question: "Abdirizak Mahomed",
    },
    {
      label: "Daniel Maldonado",
      value: "",
      question: "Daniel Maldonado",
    },
    {
      label: "Andrew Mcneal",
      value: "",
      question: "Andrew Mcneal",
    },
    {
      label: "Krista Meyer",
      value: "",
      question: "Krista Meyer",
    },
    {
      label: "Molly Montgomery",
      value: "",
      question: "Molly Montgomery",
    },
    {
      label: "Mahdi Moussa",
      value: "",
      question: "Mahdi Moussa",
    },
    {
      label: "Zeeshan Mufti",
      value: "",
      question: "Zeeshan Mufti",
    },
    {
      label: "Oscar Narvaez-claman",
      value: "",
      question: "Oscar Narvaez-claman",
    },
    {
      label: "Sophia Nguyen",
      value: "",
      question: "Sophia Nguyen",
    },
    {
      label: "Henry Olson",
      value: "",
      question: "Henry Olson",
    },
    {
      label: "Fernando Ortega",
      value: "",
      question: "Fernando Ortega",
    },
    {
      label: "Joshua Schermann",
      value: "",
      question: "Joshua Schermann",
    },
    {
      label: "Edison Simondet",
      value: "",
      question: "Edison Simondet",
    },
    {
      label: "Raymond Spartz",
      value: "",
      question: "Raymond Spartz",
    },
    {
      label: "Christopher Speltz",
      value: "",
      question: "Christopher Speltz",
    },
    {
      label: "Shaun Sticka",
      value: "",
      question: "Shaun Sticka",
    },
    {
      label: "Michael Tackett",
      value: "",
      question: "Michael Tackett",
    },
    {
      label: "Michael Wegter",
      value: "",
      question: "Michael Wegter",
    },
    {
      label: "Maxwell Winter",
      value: "",
      question: "Maxwell Winter",
    },
    {
      label: "Alexander Wu",
      value: "",
      question: "Alexander Wu",
    },
  ];

  var svg = d3
    .select('#chart')
    .append('svg')
    .data([data])
    .attr('width', w + padding.left + padding.right)
    .attr('height', h + padding.top + padding.bottom);

  var container = svg
    .append('g')
    .attr('class', 'chartholder')
    .attr('transform', 'translate(' + (w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')');

  var vis = container.append('g');

  var pie = d3.layout
    .pie()
    .sort(null)
    .value(function(d) {
      return 1;
    });

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw
  var arcs = vis
    .selectAll('g.slice')
    .data(pie)
    .enter()
    .append('g')
    .attr('class', 'slice');

  arcs
    .append('path')
    .attr('fill', function(d, i) {
      return color(i);
    })
    .attr('d', function(d) {
      return arc(d);
    });

  // add the text
  arcs
    .append('text')
    .attr('transform', function(d) {
      d.innerRadius = 0;
      d.outerRadius = r;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return (
        'rotate(' + ((d.angle * 180) / Math.PI - 90) + ')translate(' + (d.outerRadius - 10) + ')'
      );
    })
    .attr('text-anchor', 'end')
    .text(function(d, i) {
      return data[i].label;
    });

  container.on('click', spin);

  function spin(d) {
    container.on('click', null);
    var audioElement = document.createElement('audio');
    var audioElement2 = document.createElement('audio');
    audioElement.setAttribute('src', './GameShow.mp3');
    audioElement2.setAttribute('src', './RandomizerTheme.mp3');
    audioElement.play();
    audioElement2.play();

    //all slices have been seen, all done
    console.log('OldPick: ' + oldpick.length, 'Data length: ' + data.length);
    if (oldpick.length == data.length) {
      console.log('done');
      container.on('click', null);
      return;
    }

    var ps = 360 / data.length,
      pieslice = Math.round(1440 / data.length),
      rng = Math.floor(Math.random() * 1440 + 360);

    rotation = Math.round(rng / ps) * ps;

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? picked % data.length : picked;

    if (oldpick.indexOf(picked) !== -1) {
      d3.select(this).call(spin);
      return;
    } else {
      oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps / 2);

    vis
      .transition()
      .duration(6000)
      .attrTween('transform', rotTween)
      .each('end', function() {
        //mark question as seen
        d3.select('.slice:nth-child(' + (picked + 1) + ') path').attr('fill', '#111');

        //populate question
        d3.select('#question h1').text(data[picked].question);

        oldrotation = rotation;

        container.on('click', spin);
      });
  }

  //make arrow
  svg
    .append('g')
    .attr(
      'transform',
      'translate(' + (w + padding.left + padding.right) + ',' + (h / 2 + padding.top) + ')'
    )
    .append('path')
    .attr('d', 'M-' + r * 0.15 + ',0L0,' + r * 0.05 + 'L0,-' + r * 0.05 + 'Z')
    .style({ fill: 'white' });

  //draw spin circle
  container
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 60)
    .style({ fill: 'white', cursor: 'pointer' });

  //spin text
  container
    .append('text')
    .attr('x', 0)
    .attr('y', 15)
    .attr('text-anchor', 'middle')
    .text('SPIN')
    .style({ 'font-weight': 'bold', 'font-size': '30px' });

  function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
      return 'rotate(' + i(t) + ')';
    };
  }

  function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale
      .linear()
      .range([360, 1440])
      .domain([0, 100000]);

    if (window.hasOwnProperty('crypto') && typeof window.crypto.getRandomValues === 'function') {
      window.crypto.getRandomValues(array);
      console.log('works');
    } else {
      //no support for crypto, get crappy random numbers
      for (var i = 0; i < 1000; i++) {
        array[i] = Math.floor(Math.random() * 100000) + 1;
      }
    }

    return array;
  }
});
