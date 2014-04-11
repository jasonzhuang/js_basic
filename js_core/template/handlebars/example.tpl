<ul class="people_list">
  {{#each people}}
  <li>{{this}}-{{#if @last}} last one</li>
  {{/each}}
</ul>