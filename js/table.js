const $tableID = $('#table');

const newTr = `
		<tr class="hide">
                    <td class="pt-3-half">
                    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                        aria-hidden="true"></i></a></span>
                    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                        aria-hidden="true"></i></a></span>
                    </td>
                    <td class="pt-3-half" contenteditable="true">Example Task</td>
                    <td class="pt-3-half editable" contenteditable="true">5</td>
                    <td class="pt-3-half" contenteditable="false">0</td>
                    <td>
                    <span class="table-remove"><button type="button"
                      class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                  </tr>`;

$('.table-add').on('click', 'i', () => {

	const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

	if ($tableID.find('tbody tr').length === 0) {

	$('tbody').append(newTr);
	}

	$tableID.find('table').append($clone);
	$('#tbodyTest >tr').trigger('focusout')
});

$tableID.on('click', '.table-remove', function () {
	if(document.getElementById("tbodyTest").rows.length > 1){
		$(this).parents('tr').detach();
	}
	$('#tbodyTest >tr').trigger('focusout')
});

$tableID.on('click', '.table-up', function () {

	const $row = $(this).parents('tr');

	if ($row.index() === 0) {
	return;
	}

	$row.prev().before($row.get(0));
});

$tableID.on('click', '.table-down', function () {

	const $row = $(this).parents('tr');
	$row.next().after($row.get(0));
});



function saveTable(){
	var tasksContent = document.getElementById("tasks").innerHTML;
	var startTime = document.getElementById("starttime").value;


  // Store Content
  localStorage.setItem("tasksContent", tasksContent);
  localStorage.setItem("startTime", startTime);
}

function destroy(){
  document.getElementById("tasks").innerHTML = `<table class="table table-bordered table-responsive-md table-striped text-center" id="tasks">
  <thead>
  <tr>
	<th class="text-center">Sort</th>
	<th class="text-center">Task</th>
	<th class="text-center">Duration (Minutes)</th>
	<th class="text-center">Delete</th>
  </tr>
  </thead>
  </tbody>
  </tbody>
  </table>`;
}

  // Retrieve Content    
function retrieve(){
	document.getElementById("starttime").value = "07:00:00";
	document.getElementById("tasks").innerHTML = `                  <table class="table table-bordered table-responsive-md table-striped text-center" id="tasks">
	<thead>
	<tr>
	  <th class="text-center">Sort</th>
	  <th class="text-center">Task</th>
	  <th class="text-center">Duration (Minutes)</th>
	  <th class="text-center">Delete</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	  <td class="pt-3-half">
	  <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
		  aria-hidden="true"></i></a></span>
	  <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
		  aria-hidden="true"></i></a></span>
	  </td>
	  <td class="pt-3-half" contenteditable="true">Pack lunch</td>
	  <td class="pt-3-half" contenteditable="true">5</td>
	  <td>
	  <span class="table-remove"><button type="button"
		class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
	  </td>
	</tr>

	<!-- This is our clonable table line -->
	<tr class="hide">
	  <td class="pt-3-half">
	  <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
		  aria-hidden="true"></i></a></span>
	  <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
		  aria-hidden="true"></i></a></span>
	  </td>
	  <td class="pt-3-half" contenteditable="true">Example Task</td>
	  <td class="pt-3-half" contenteditable="true">5</td>
	  <td>
	  <span class="table-remove"><button type="button"
		class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
	  </td>
	</tr>
	</tbody>
  </table>`;
}


	// $('#tbodyTest >tr').on('focusout', 'td.editable', (e) => {
	// 	let target = $(e.target),
	// 	  parent_row = $(e.target).closest('tr'),
	// 	  previous_row = parent_row.prev();
	// 	setTimeout(() => {
	// 	  if (!isNaN(target.text())) {
	// 		  $('#tbodyTest').children('tr').each((i,e)=>{
	// 		$(e).find('td:eq(3)').text(Number($(e).find('td:eq(2)').text()) +Number($(e).prev().find('td:eq(3)').text()))
	// 	  })
	// 	  }else{
	// 		target.text("0");
	// 	parent_row.find('td:eq(3)').text("0");
	// 	$('#tbodyTest').children('tr').each((i,e)=>{
	// 	$(e).find('td:eq(3)').text(Number($(e).find('td:eq(2)').text()) +Number($(e).prev().find('td:eq(3)').text()))
	//   })
	// 	  }
	// 	})
	//   })


// if ("tasksContent" in localStorage){
// 	document.getElementById("tasks").innerHTML = localStorage.getItem("tasksContent");
//   }else {

