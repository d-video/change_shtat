<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function get_holidays() {
  $arr_holidays = array(
    0 => array(
      'day' => 1,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    1 => array(
      'day' => 2,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    2 => array(
      'day' => 3,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    3 => array(
      'day' => 4,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    4 => array(
      'day' => 5,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    5 => array(
      'day' => 6,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    6 => array(
      'day' => 7,
      'month' => 1,
      'holiday_name' => 'Рождество Христово',
    ),
    7 => array(
      'day' => 8,
      'month' => 1,
      'holiday_name' => 'Новогодние каникулы',
    ),
    8 => array(
      'day' => 23,
      'month' => 2,
      'holiday_name' => 'День защитника отечества',
    ),
    9 => array(
      'day' => 8,
      'month' => 3,
      'holiday_name' => 'Международный женский день',
    ),
  );

  return $arr_holidays;
}

function get_unix_holidays($year) {
  $arr_holidays = get_holidays();
  $holidays = array();

  foreach ($arr_holidays as $holiday) {
    $day = $holiday['day'];
    $month = $holiday['month'];
    $holidays[] = mktime(0, 0, 0, $month, $day, $year);
  }

  return $holidays;
}

function get_leave_days($year) {
  $arr_leave_days = array(
    '09-03-2017',
    '10-03-2017',
    '11-03-2017',
    '12-03-2017',
    '01-08-2017',
    '02-08-2017',
    '05-08-2017',
  );

  return $arr_leave_days;
}

function get_range_leave_dates($arr_leave_dates) {
  /* $prev_date = '';
    $start_leave = '';
    $days = 0;
    $range_leave_dates = array();

    foreach ($arr_leave_dates as $leave_date) {
    $prev_d = format_date(strtotime($leave_date) - 86400, 'custom', 'Y-m-d');

    if ($prev_d == $prev_date) {
    $days++;
    }
    else {
    if ($days == 0) {
    $start_leave = $leave_date;
    $days++;
    }
    else {
    $range_leave_dates[] = array(
    'start_leave' => $start_leave,
    'days' => $days,
    );
    $start_leave = $leave_date;
    $days = 0;
    }
    }
    $prev_date = $leave_date;
    }

    return $range_leave_dates; */

  $prev_date = '';
  //$str_start_leave = '';
  $start_leave = ''; //array();
  //$arr_total_days = array();
  $days = 1;
  $i = 0;
  $range_leave_dates = array();

  sort($arr_leave_dates);

  foreach ($arr_leave_dates as $leave_date) {
    $prev_d = format_date(strtotime($leave_date) - 86400, 'custom', 'Y-m-d');

    if ($prev_d == $prev_date) {
      $days++;
    } else {
      $start_leave = $leave_date;
      //$str_start_leave = $leave_date;
      $i = count($start_leave) - 1;
      $days = 1;
    }

    //$arr_total_days[$i] = $days;
    $range_leave_dates[$start_leave] = $days;
    $prev_date = $leave_date;
  }

  return $range_leave_dates; //$arr_total_days;
}

function get_rec_id($recid = 0) {
  $result = array();
  if ($recid) {
    //debug($recid);
    $rec = db_select('cs_list', 'list')
            ->fields('list')
            ->condition('list.recid', $recid)
            //->condition('n.uid', 1)
            ->execute()
            ->fetchAssoc();

    //debug($rec);

    $result['date_from'] = format_date(strtotime($rec['date_from']), 'custom', 'd.m.Y'); //'5/19/2017'; //format_date(strtotime($rec['date_from']), 'custom', 'd.m.Y');
    $result['name'] = $rec['name'];
    $result['description'] = $rec['description'];
    $result['status'] = $rec['status'];

    /* $result['record'] = array(
      //'recid' => $rec['recid'],
      //'dep_id' => $rec['dep_id'],
      'date_from' => format_date(strtotime($rec['date_from']), 'custom', 'd.m.Y'),
      'name' => $rec['name'],
      //'status' => $rec['status'],
      ); */
  }
  return $result;
}

function get_recs_cells($recid = 0) {
  $result = array();
  if ($recid) {
    //debug($recid);
    $rec = db_select('cs_list', 'list')
            ->fields('list')
            ->condition('list.recid', $recid)
            //->condition('n.uid', 1)
            ->execute()
            ->fetchAssoc();

    //debug($rec);

    $result['date_from'] = format_date(strtotime($rec['date_from']), 'custom', 'd.m.Y');
    $result['name'] = $rec['name'];
    $result['description'] = $rec['description'];
    $result['status'] = $rec['status'];

    /* $result['record'] = array(
      //'recid' => $rec['recid'],
      //'dep_id' => $rec['dep_id'],
      'date_from' => format_date(strtotime($rec['date_from']), 'custom', 'd.m.Y'),
      'name' => $rec['name'],
      //'status' => $rec['status'],
      ); */
  }
  return $result;
}
