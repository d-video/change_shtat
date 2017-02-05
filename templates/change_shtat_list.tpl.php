<?php ?>


<div id="form1" style="width: 100%">
  <div class="w2ui-page page-0">
    <div class="w2ui-field">
      <label>Имя:</label>
      <div><input name="first_name" type="text" maxlength="100" size="60" placeholder="Укажите Ваше имя"/></div>
    </div>
    <div class="w2ui-field">
      <label>Фамилия:</label>
      <div><input name="last_name" type="text" maxlength="100" size="60"/></div>
    </div>
    <div class="w2ui-field">
      <label>Период с</label>
      <div><input type="eu-date1" size="10"> по <input type="eu-date2" size="10"> </div>
    </div>
    <div class="w2ui-field">
      <label>Comments:</label>
      <div><textarea name="comments" type="text" style="width: 100%; height: 80px; resize: none"></textarea></div>
    </div>
  </div>
  <div class="w2ui-page page-1">
    <div id="cells_test" style="width: 100%; height: 200px;"></div>
  </div>

  <div class="w2ui-buttons">
    <button class="w2ui-btn" name="reset">Reset</button>
    <button class="w2ui-btn" name="save">Save</button>
    <button class="w2ui-btn" name="close">Cancel</button>
  </div>
</div>

<div id="popup1"></div>