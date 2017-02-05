(function ($) {
  Drupal.behaviors.change_shtat = {
    attach: function (context, settings) {

      //var holidays = Drupal.settings.holidays;
      //var leave_days = Drupal.settings.leave_days;
      //var total_leave_days = Drupal.settings.total_leave_days;
      //var year = Drupal.settings.year;

      var options = {
        foo: {
          name: 'foo',
          style: 'border: 0px; background-color: transparent;',
          formURL: '/hr/data/change_shtat/get_form_edit',
          fields: [
            {field: 'first_name', type: 'text', required: true},
            {field: 'last_name', type: 'text', required: true},
            //{field: 'email', type: 'email'}
          ],
          tabs: [
            {id: 'tab1', caption: 'Параметры'},
            {id: 'tab2', caption: 'Перечень изменений', onClick: function () {
                w2ui['cells_test'].refresh();
              }
            },
            //{id: 'tab3', caption: 'Комментарий'},
          ],
          record: {
            first_name: 'John',
            last_name: 'Doe',
            //email: 'jdoe@email.com'
          },
          actions: {
            "save": function () {
              this.validate();
            },
            "reset": function () {
              this.clear();
            },
            "cancel": function () {
              alert('cancel');
            }
          }
        },
        cells_test: {
          name: 'cells_test',
          show: {
            toolbar: true,
            footer: true,
            toolbarAdd: true,
            toolbarDelete: true,
            toolbarSave: true,
            toolbarEdit: true
          },
          columns: [
            {field: 'fname', caption: 'First Name', size: '10%'},
            {field: 'lname', caption: 'Last Name', size: '10%'},
            //{field: 'sdate', caption: 'Start Date', size: '60%'},
            //{field: 'email', caption: 'Email', size: '20%'},
            //{field: 'sdate', caption: 'Start Date', size: '60%'},
          ],
          onAdd: function (event) {
            openPopup1();
          },
          onDblClick: function (event) {
            //this.onAdd();
            //console.log(w2popup);
            //$('#form').w2popup(options.form);
            openPopup1();
          }
        },
      };

      $('#cs-list').w2grid({
        name: 'cs-list',
        url: '/hr/data/change_shtat/list',
        //method: 'GET', // need this to avoid 412 error on Safari
        show: {
          toolbar: true,
          footer: true,
          toolbarAdd: true,
          //toolbarDelete: true,
          //toolbarSave: true,
          toolbarEdit: true
        },
        columns: [
          {field: 'date_from', caption: 'Действует с', size: '10%'},
          {field: 'name', caption: 'Описание', size: '70%'},
          {field: 'status', caption: 'Статус', size: '20%'},
          //{field: 'sdate', caption: 'Start Date', size: '60%'},
        ],
        onAdd: function (event) {
          //w2alert('add');
          //openPopup(0);
          location.href = '/change_shtat/add';
        },
        onEdit: function (event) {
          //openPopup(event.recid);
          location.href = '/change_shtat/edit/' + event.recid;
        },
        onDelete: function (event) {
          console.log('delete has default behavior');
        },
        onSave: function (event) {
          w2alert('save');
        },
        onDblClick: function (event) {
          //this.onAdd();
          //console.log(w2popup);
          //$('#form').w2popup(options.form);
          openPopup(event.recid);
        }
      });

      function openPopup(recid) {
        if (!w2ui.foo) {
          $().w2form(options.foo);
          $().w2grid(options.cells_test);
        }
        console.log(w2ui.cells_test);
        console.log(w2ui.foo);
        $().w2popup('open', {
          title: 'Form in a Popup' + recid,
          body: '<div id="form" style="width: 100%; height: 100%;"></div>',
          style: 'padding: 15px 0px 0px 0px',
          width: 700,
          height: 400,
          showMax: true,
          onToggle: function (event) {
            $(w2ui.foo.box).hide();
            event.onComplete = function () {
              $(w2ui.foo.box).show();
              w2ui.foo.resize();
              w2ui['cells_test'].refresh();
              //w2ui['cells_test'].refresh();
            }
          },
          onOpen: function (event) {
            $('#w2ui-popup #form').w2render('foo');
            event.onComplete = function () {
              // specifying an onOpen handler instead is equivalent to specifying an onBeforeOpen handler, which would make this code execute too early and hence not deliver.
              $('#w2ui-popup #form').w2render('foo');
              $('#w2ui-popup #form1 #cells_test').w2render('cells_test');
              w2ui['cells_test'].refresh();
              console.log(w2ui.cells_test);
              console.log(w2ui.foo);
            }
          }
        });
      }

      function openPopup1() {
        location.href = '/leave_shedule';
      }

      //$('input[type=eu-date1]').w2field('date', {format: 'd.m.yyyy', end: $('input[type=eu-date2]')});
      //$('input[type=eu-date2]').w2field('date', {format: 'd.m.yyyy', start: $('input[type=eu-date1]')});

      //w2ui.form.goto(3);
      //w2ui.form.goto(0);

      //w2ui['grid'].refresh();
      //w2ui['grid'].resize();

      //var tb = w2ui.form.tabs.tabs[3];
      //console.log(tb);

      //console.log(w2ui.form.tabs.tabs[3]);
      //console.log(w2ui['form_tabs']);
      //console.log(w2ui['grid']);

      /*$().w2popup({
       title: 'My form in popup',
       width: 800,
       height: 600,
       });*/

      $('#btn_clear').on('click', function () {
        //pickmeup('#leave-shedule').clear();
      });

    }
  };
})(jQuery);

