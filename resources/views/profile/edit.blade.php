@extends('layouts.master')

@section('content-header')

@stop

@section('styles')
   
@stop
@section('headerspace')
<div class="header-spacer"></div>
@stop
@section('content')

<!-- Top Header -->

 
@include('profile.header')

<!-- ... end Top Header -->

<div class="container">
	<div class="row">

		

		<div class="col-xl-3   col-lg-6   col-md-6 col-sm-12 col-xs-12">
			<div class="ui-block">
				<div class="ui-block-title">
					<h6 class="title">Sobre mi</h6>
				</div>
				<div class="ui-block-content">
					<ul class="widget w-personal-info item-block">
						<li>
							<span class="title">Trabajo en :</span>
							<span class="text"> <a href="{{route('company',$profile->companies->id)}}">{{$profile->companies->name}} - {{$profile->countries->nombre_completo}}</a></span>
						</li>
						<li>
							<span class="title">Dirección :</span>
							<span class="text">{{$profile->street_address}} {{$profile->deliveryOffices->name}} {{$profile->postal_code}}</span>
						</li>
						<li>
							<span class="title">Teléfono</span>
                                                        <span class="text"><a href="tel:{{$profile->telephone_number}}">{{$profile->telephone_number}}</a></span>
						</li>
                                                <li>
							<span class="title">Correo Electrónico</span>
                                                        <span class="text"><a href="mailto:{{$profile->email}}">{{$profile->email}}</a></span>
						</li>
					</ul>

				 
				</div>
			</div>

		 
		  
 
		</div>

	 <!-- Main Content -->
                <div class="col-xl-9   col-lg-12   col-md-12 col-sm-12 col-xs-12">
                    
                    <div class="ui-block">
				<div class="ui-block-title">
					<h6 class="title">Edición Perfil</h6>
				</div>
				<div class="ui-block-content">
                                    {!! Form::open(['url' => route("updateProfile",$profile->id)]) !!}
                                        <div class="form-group">
                                           <div class="col-sm-12 text-center">
                                               <button class="btn btn-primary btn-md-2 " type="submit">Acualizar Perfil</button>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label for="first_name" class="col-sm-4 control-label">Primer Nombre</label>
                                          <div class="col-sm-10">
                                              <input type="text" class="form-control" value="{{$profile->first_name}}" name="first_name"  placeholder="Password">
                                              <input type="hidden" value="{{$profile->id}}" name="id_user"/>  
                                        </div>
                                        </div>

                                        <div class="form-group">
                                          <label for="last_name" class="col-sm-4 control-label">Apellido</label>
                                          <div class="col-sm-10">
                                              <input type="text" class="form-control" value="{{$profile->last_name}}" name="last_name"  placeholder="Password">
                                          </div>
                                        </div>

                                        <div class="form-group">
                                          <label for="email" class="col-sm-4 control-label">Correo Electrónico</label>
                                          <div class="col-sm-10">
                                              <input type="email" class="form-control" value="{{$profile->email}}" name="email"  placeholder="Password">
                                          </div>
                                        </div>
                    
                                        <div class="form-group">
                                          <label for="description" class="col-sm-4 control-label">Info</label>
                                          <div class="col-sm-10">
                                              <textarea name="description" id="editor1" class="form-control">Hola, soy {{$profile->getCompleteName()}} @if($profile->title) y me desempeño como {{$profile->titles->name}} @endif me podés encontrar en el teléfono <a href="tel:{{$profile->telephone_number}}">{{$profile->telephone_number}}</a> @if($profile->email) o en mi email <a href="mailto:{{$profile->email}}">{{$profile->email}}</a> @endif</textarea>
                                          </div>
                                        </div>
                                    <div class="form-group">
                                          <label for="department" class="col-sm-4 control-label">Departamentos</label>
                                          <div class="col-sm-10">
                                            {{Form::select('department', $departments, $profile->department)}}
                                          </div>
                                        </div>
                                    
                                        <div class="form-group">
                                          <label for="title" class="col-sm-4 control-label">Título</label>
                                          <div class="col-sm-10">
                                            {{Form::select('title', $titles, $profile->title)}}
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label for="title" class="col-sm-4 control-label">Teléfono</label>
                                          <div class="col-sm-10">
                                             <input type="text" class="form-control" value="{{$profile->telephone_number}}" name="telephone_number"  placeholder="Teléfono">

                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label for="street_address" class="col-sm-4 control-label">Dirección Laboral</label>
                                          <div class="col-sm-10">
                                            <input type="text" class="form-control" value="{{$profile->street_address}}"  name="street_address" id="street_address" placeholder="Dirección">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label for="delivery_office_name" class="col-sm-4 control-label">Lugar de Trabajo</label>
                                          <div class="col-sm-10">
                                            {{Form::select('delivery_office_name', $delivery_office_name, $profile->delivery_office_name)}}
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label for="thumbnail" class="col-sm-4 control-label">Imágen de Perfil</label>
                                          <div class="col-sm-10">
                                              
                                             {!! Form::fileManage(null,asset($profile->getThumbnail()),$profile->thumbnail) !!}
                                          </div>
                                        </div>
                                     


                                      {!! Form::close() !!}

				 
				</div>
			</div>
                    
                </div>

	</div>
</div>

@stop

@section('scripts')
    @parent
    <script src="{{asset("js/modules/profile.js")}}"></script>
<script src="{{asset('ckeditor/ckeditor.js')}}"></script>

    <script>
        
                
CKEDITOR.replace( 'editor1',
{
    filebrowserUploadUrl : '{{route("blog.uploadImage")}}'
});
        
        var typePost=2;
        var sourcePost=0;
  </script>
@stop
