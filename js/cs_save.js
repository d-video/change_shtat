(function ($) {
  Drupal.behaviors.change_shtat = {
    attach: function (context, settings) {

      //var recid = Drupal.settings.recid;
      var form_record = Drupal.settings.form_record;
      //var leave_days = Drupal.settings.leave_days;
      //var total_leave_days = Drupal.settings.total_leave_days;
      //var year = Drupal.settings.year;

      var config = {
        tb_grid: {
          name: 'tb_grid',
          columns: [
            {field: 'fname', caption: 'First Name', size: '100%'},
          ],
        },
        tb_form: {
          header: 'Edit Record',
          name: 'tb_form',
          fields: [
            {name: 'recid', type: 'text', html: {caption: 'ID', attr: 'size="10" readonly'}},
            {name: 'fname', type: 'text', required: true, html: {caption: 'First Name', attr: 'size="40" maxlength="40"'}},
            {name: 'lname', type: 'text', required: true, html: {caption: 'Last Name', attr: 'size="40" maxlength="40"'}},
            {name: 'email', type: 'email', html: {caption: 'Email', attr: 'size="30"'}},
            {name: 'sdate', type: 'date', html: {caption: 'Date', attr: 'size="10"'}}
          ],
          actions: {
            Reset: function () {
              this.clear();
            },
            Save: function () {
              console.log('save');
              /*var errors = this.validate();
              if (errors.length > 0)
                return;
              if (this.recid == 0) {
                w2ui.grid.add($.extend(true, {recid: w2ui.grid.records.length + 1}, this.record));
                w2ui.grid.selectNone();
                this.clear();
              } else {
                w2ui.grid.set(this.recid, this.record);
                w2ui.grid.selectNone();
                this.clear();
              }*/
            }
          }
        }
      };

      //console.log('recid: ' + recid);
      //console.log(record);

      $('#form').w2form({
        name: 'form',
        header: 'Form with Tabs',
        //url: '/hr/data/change_shtat/get_change_id',
        //recid: recid,
        fields: [
          {name: 'date_from', type: 'text'},
          {name: 'name', type: 'text', required: true},
          {name: 'description', type: 'text', required: true},
          //{field: 'status', caption: 'Статус', size: '20%'},
          //{field: 'address1', type: 'text', required: true},
          //{field: 'address2', type: 'text'},
          //{field: 'city', type: 'text', required: true},
          //{field: 'state', type: 'text', required: true},
          //{field: 'zip', type: 'int', required: true},
          //{field: 'short_bio', type: 'text'},
          //{field: 'talk_name', type: 'text', required: true},
          //{field: 'description', type: 'text'}
        ],
        record: form_record,
        tabs: [
          {id: 'tab1', caption: 'General'},
          //{id: 'tab2', caption: 'Address'},
          //{id: 'tab3', caption: 'About'},
          {id: 'tab2', caption: 'Перечень изменений', onClick: function () {
              w2ui['cells'].refresh();
            }
          },
          {id: 'tab3', caption: 'Тестирование', onClick: function () {
              w2ui.layout.refresh();
            }
          },
        ],
        msgRefresh: 'Загрузка данных',
        actions: {
          reset: function () {
            this.clear();
          },
          save: function () {
            this.save();
          },
          close: function () {
            //alert('close');
            //location.href = '/change_shtat/list';
            w2ui['form'].goto(2);
            w2ui['layout'].refresh();
          }
        }
      });

      //console.log(w2ui.form);

      $('#cells').w2grid({
        name: 'cells',
        //url: 'data/list.json',
        //method: 'GET', // need this to avoid 412 error on Safari
        columns: [
          {field: 'fname', caption: 'First Name', size: '10%'},
          {field: 'lname', caption: 'Last Name', size: '10%'},
          {field: 'email', caption: 'Email', size: '20%'},
          {field: 'sdate', caption: 'Start Date', size: '60%'},
        ],
        records: [
          {recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 7, fname: 'Mark', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
          {recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012'}
        ],
        onDblClick: function (event) {
          alert('dblClick');
          console.log(event);
        }
      });

      var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
      $('#layout').w2layout({
        name: 'layout',
        panels: [
          //{type: 'left', size: '50%', resizable: true, minSize: 300, content: $().w2grid(config.tb_grid)},
          //{type: 'main', minSize: 300, content: 'main text'},
          {type: 'left', size: '50%', resizable: true, minSize: 300},
          {type: 'main', minSize: 300},
        ],
      });

      //w2ui['form'].goto(2);
      w2ui.layout.content('left', $().w2grid(config.tb_grid));
      w2ui.layout.content('main', $().w2form(config.tb_form));
      //w2ui['form_tabs'].refresh();

      /*$('input[name=date_from').w2field('date', {
       format: 'dd.mm.yyyy',
       });*/
      $('input[type=eu-date1]').w2field('date', {format: 'dd.mm.yyyy', end: $('input[type=eu-date2]')});
      $('input[type=eu-date2]').w2field('date', {format: 'dd.mm.yyyy', start: $('input[type=eu-date1]')});
      //$('input[type=eu-date]').w2field('date', {format: 'dd.mm.yyyy'});

      console.log(w2ui);

    }
  };
})(jQuery);

