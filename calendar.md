---
layout: page
title: Calendar
permalink: /calendar/
published: true
custom_js:
 - calendar
---

<script src='https://apis.google.com/js/client.js?onload=handleClientLoad'>

</script>


<div id='content'>
    <h1 id='calendar' style="color:grey">LOADING . . . .</h1>
    <ul id='events'></ul>
</div>
    
    
<p id='updated' style="font-size:12; color:grey">updating . . . . .</p>

## Meeting Agendas

<ul>
    {% for agendas in site.assets/agendas %}
        <li>
            <a href="{{ agendas.url }}">{{ agendas.title }} </a>
        </li>
    {% endfor %}
</ul>
    
 <!--- <iframe src="http://commingly.com/cfwstem/events/upcoming/"  scrolling="yes" frameborder="0" allowTransparency="true" width="700" height="400"></iframe> --->