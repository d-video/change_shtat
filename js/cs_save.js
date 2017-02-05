(function ($) {
  Drupal.behaviors.change_shtat = {
    attach: function (context, settings) {

      //var recid = Drupal.settings.recid;
      var form_record = Drupal.settings.form_record;
      //var leave_days = Drupal.settings.leave_days;
      //var total_leave_days = Drupal.settings.total_leave_days;
      //var year = Drupal.settings.year;
      
      //console.log('recid: ' + recid);
      //console.log(record);

      $('#form').w2form({
        name: 'form',
        header: 'Form with Tabs',
        //url: '/hr/data/change_shtat/get_change_id',
        //recid: recid,
        fields: [
          {name: 'date_from', type: 'date', format: 'dd.mm.yyyy'},
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
          }
        ],
        msgRefresh: 'Загрузка данных',
        actions: {
          reset: function () {
            this.clear();
          },
          save: function () {
            this.save();
          },
          close: function() {
            //alert('close');
            location.href = '/change_shtat/list';
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
        onDblClick: function(event) {
          alert('dblClick');
          console.log(event);
        }
      });

      /*$('input[name=date_from').w2field('date', {
        format: 'dd.mm.yyyy',
      });*/
      $('input[type=eu-date1]').w2field('date', {format: 'dd.mm.yyyy', end: $('input[type=eu-date2]')});
      $('input[type=eu-date2]').w2field('date', {format: 'dd.mm.yyyy', start: $('input[type=eu-date1]')});
      //$('input[type=eu-date]').w2field('date', {format: 'dd.mm.yyyy'});

    }
  };
})(jQuery);

