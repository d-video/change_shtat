<?php ?>


<div id="form" style="width: 100%">
  <div class="w2ui-page page-0">
    <div class="w2ui-field">
      <label>Имя:</label>
      <div><input name="date_from" type="text" maxlength="10" size="12" placeholder="Укажите Ваше имя"/></div>
    </div>
    <div class="w2ui-field">
      <label>Наименование:</label>
      <div><input name="name" type="text" maxlength="100" size="60" placeholder="Краткое описание изменения ШР"/></div>
    </div>
    <div class="w2ui-field">
      <label>Период с</label>
      <div><input type="eu-date1" size="10"> по <input type="eu-date2" size="10"> </div>
    </div>
    <div class="w2ui-field">
      <label>Обоснование:</label>
      <div><textarea name="description" type="text" style="width: 100%; height: 80px; resize: none"></textarea></div>
    </div>
  </div>
  <div class="w2ui-page page-1">
    <div id="cells" style="width: 100%; height: 200px;"></div>
  </div>
  <div class="w2ui-page page-2">
    <div id="layout" style="width: 100%; height: 400px;"></div>
  </div>  

  <div class="w2ui-buttons">
    <button class="w2ui-btn" name="reset">Reset</button>
    <button class="w2ui-btn" name="save">Save</button>
    <button class="w2ui-btn" name="close">Cancel</button>
  </div>
</div>