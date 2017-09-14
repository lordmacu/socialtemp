
@extends('layouts.master')

@section('content-header')

@stop

@section('styles')
   	<link rel='stylesheet' href='css/fullcalendar.css'/>

<style>
	.row_timesheet{
		border-bottom:1px solid #cecece;
		background: white;
		padding: 10px;
		padding-top: 20px;
		padding-bottom: 5px;

	}
	.row_timesheet:hover{
		    background: #f7f7f7;

	}


	.time_text{
		font-size: 30px
	}

.title_time_sheet{
	    font-size: 17px;
}

.subtitle_time_sheet{
	    font-size: 13px;
}

.action_time{
	    padding: 10px;
    font-size: 20px;
}

.edit_button{
	      padding: 10px;
    margin-top: 5px;
}

.btn-group p{
    margin: 0px;
}


.btn-group span{
        margin: 0px;
    font-size: 18px;
}
.btn-group .btn{
	padding-left: 40px;
    padding-right: 40px
}

.btn-primary:focus, .btn-primary.focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0);
}

.container_add_button button{
    padding: 14px;
    font-size: 20px;
}
</style>
@stop
@section('headerspace')
<div class="header-spacer "></div>
@stop
@section('content')





<!-- ... end Main Header Events -->


 
<!-- Tab panes -->
<div class="tab-content">
	<div class="tab-pane active" id="events" role="tabpanel">

		<div class="container">
			<div class="row">
			<div class="col-md-10">
				 <div class="btn-group" data-toggle="buttons">
				  <label class="btn btn-primary btn-md active">
				    <input type="radio" name="options" id="option1" autocomplete="off" checked> <span> Lunes</span>
				    <p>7:30</p>
				  </label>
				  <label class="btn btn-primary btn-md ">
				    <input type="radio" name="options" id="option2" autocomplete="off"> <span>Martes</span>
				    <p>7:30</p>
				  </label>
				  <label class="btn btn-primary  btn-md ">
				    <input type="radio" name="options" id="option3" autocomplete="off"> <span> Miercoles</span>
   				    <p>7:30</p>
				  </label>
  				  <label class="btn btn-primary  btn-md ">
				    <input type="radio" name="options" id="option3" autocomplete="off">  <span>Jueves</span>
				    <p>7:30</p>
				    </label>
  				  <label class="btn btn-primary btn-md ">
				    <input type="radio" name="options" id="option3" autocomplete="off"> <span> Viernes</span>
				    <p>7:30</p>
				  </label>
				  <label class="btn btn-info btn-md ">
				    <input type="radio" name="options" id="option3" autocomplete="off"> <span> Total : <p>20:50</p>
				  </label>
				</div> 
				
			</div>
			<div class="col-md-2">
				<div class="container_add_button">
									<button class="btn-green btn  btn-md"><i class="fa fa-plus" aria-hidden="true"></i>
 Agregar</button>

				</div>
			</div>
			</div>
			<div class="col-xs-12 col-md-12">
			
 
@for ($i = 0; $i < 10; $i++)
 				 

				<div class="row row_timesheet">
					<div class="col-xs-9 col-md-9">
							<div class="title_time_sheet"><strong>Titulo con la tarea</strong> (Tipo de tarea)</div>
							<div class="subtitle_time_sheet">Area - Descripción</div>
					</div>
					<div class="col-xs-3 col-md-3">
						<div class="row">
							<div class="col-md-4">
								<span class="time_text">0:80</span>
							</div>
							
							<div class="col-md-4">
								<button class="btn btn-grey action_time edit_button  btn-md-2"> <i class="fa fa-pencil" aria-hidden="true"></i> Editar</button>
							</div>
						</div>
					</div>
				</div>
@endfor

 			</div>
		</div>
	</div>

	 
</div>

 
</div>
<!-- ... end Window-popup Create Event -->


@stop

@section('scripts')
    @parent
    <script src="js/fullcalendar.js"></script>

@stop

