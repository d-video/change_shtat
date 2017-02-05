(function ($) {
  Drupal.behaviors.change_shtat = {
    attach: function (context, settings) {

      //var holidays = Drupal.settings.holidays;
      //var leave_days = Drupal.settings.leave_days;
      //var total_leave_days = Drupal.settings.total_leave_days;
      //var year = Drupal.settings.year;

      function do_request() {
        /*$.ajax({
          url: '/hr/data/change_shtat/cells',
          type: 'POST',
          data: {param: 1, structid: 12345},
          success: function (data) {
            console.log(data);
            w2ui['cells'].reload();
          }
        });*/
        alert('Adding');
      }

      $('#panel').w2toolbar({
        name: 'toolbar',
        items: [
          {type: 'check', id: 'item1', caption: 'Check'},
          {type: 'button', id: 'item2', caption: 'Добавить', icon: 'fa-star'},
        ],
        onClick: function (event) {
          switch (event.target) {
            case 'item2':
              do_request();
              break;
          }
        },
      });

      $('#form').w2form({
        name: 'form',
        header: 'Form with Tabs',
        url: 'server/post',
        fields: [
          {field: 'first_name', type: 'text', required: true},
          {field: 'last_name', type: 'text', required: true},
          {field: 'comments', type: 'text'},
          {field: 'address1', type: 'text', required: true},
          {field: 'address2', type: 'text'},
          {field: 'city', type: 'text', required: true},
          {field: 'state', type: 'text', required: true},
          {field: 'zip', type: 'int', required: true},
          {field: 'short_bio', type: 'text'},
          {field: 'talk_name', type: 'text', required: true},
          {field: 'description', type: 'text'}
        ],
        tabs: [
          {id: 'tab1', caption: 'General'},
          {id: 'tab2', caption: 'Address'},
          {id: 'tab3', caption: 'About'},
          {id: 'tab4', caption: 'Пункты назначения', onClick: function () {
              w2ui['grid'].refresh();
            }
          }
        ],
        actions: {
          reset: function () {
            this.clear();
          },
          save: function () {
            this.save();
          }
        }
      });

      //console.log(w2ui.form);

      $('#grid').w2grid({
        name: 'grid',
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

      strId = 13225;

      $('#cells').w2grid({
        name: 'cells',
        url: '/hr/data/change_shtat/cells',
        method: 'POST',
        postData: {structid: strId},
        limit: 2,
        //postData: {param: 1, structid: 12345},
        columns: [
          {field: 'fname', caption: 'First Name', size: '30%'},
          {field: 'lname', caption: 'Last Name', size: '30%'},
          {field: 'email', caption: 'Email', size: '20%'},
          {field: 'sdate', caption: 'Start Date', size: '20%'},
        ],
        /*records: [
         {recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
         {recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
         {recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012'},
         ],*/
      });

      $('input[type=eu-date1]').w2field('date', {format: 'd.m.yyyy', end: $('input[type=eu-date2]')});
      $('input[type=eu-date2]').w2field('date', {format: 'd.m.yyyy', start: $('input[type=eu-date1]')});

      //w2ui.form.goto(3);
      //w2ui.form.goto(0);

      //w2ui['grid'].refresh();
      //w2ui['grid'].resize();

      //var tb = w2ui.form.tabs.tabs[3];
      //console.log(tb);

      //console.log(w2ui.form.tabs.tabs[3]);
      //console.log(w2ui['form_tabs']);
      //console.log(w2ui['grid']);

      $('#jstree').jstree({
        'core': {
          'data': {
            'url': '/hr/data/change_shtat/structs',
          },
        },
      });

      $('#jstree').on("changed.jstree", function (e, data) {
        var sel = data.selected[0];
        if (data.selected.length) {
          //console.log(data.selected[0]);
          //console.log(w2ui);
          w2ui.cells.postData['structid'] = sel;
          //w2ui.cells.postData['newparam'] = 'new';
          w2ui['cells'].reload();
          //w2ui['cells'].request('get-records', {postData: {param: 2, structid: sel}});
          //w2ui['cells'].refresh();
          //alert('The selected node is: ' + data.instance.get_node(data.selected[0]).text);
        }
      });
      
      console.log($('#jstree').jstree());


      $('#btn_clear').on('click', function () {
        //pickmeup('#leave-shedule').clear();
      });

    }
  };
})(jQuery);

