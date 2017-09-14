@if($sidebarFeed->source_type!=1) 
<li>
    <div class="author-thumb">
        <img src="{{$sidebarFeed->user->userFields->getThumbnail()}}" alt="author">
    </div>
    <div class="notification-event">
        @if($sidebarFeed->source_type==2)
        <a href="{{route('profile',$sidebarFeed->user->id)}}" class="h6 notification-friend">{{$sidebarFeed->user->userFields->getCompleteName()}}</a> comentó en el perfil de <a href="{{route('profile',$sidebarFeed->user->id)}}" class="notification-link">{{$sidebarFeed->user->userFields->getCompleteName()}}.</a>.
        <span class="notification-date"><time class="entry-date updated" datetime="{{$sidebarFeed->created_at->format('c')}}">{{$sidebarFeed->created_at->format('c')}}</time></span>
        
        @elseif($sidebarFeed->source_type==3)
           <a href="{{route('company',$sidebarFeed->source_id)}}" class="h6 notification-friend">{{$sidebarFeed->user->userFields->getCompleteName()}}</a> comento en el muro de <a href="{{route('company',$sidebarFeed->source_id)}}" class="notification-link">{{$sidebarFeed->company->name}}</a>.
        <span class="notification-date"><time class="entry-date updated timeago" datetime="{{$sidebarFeed->created_at->format('c')}}">{{$sidebarFeed->created_at->format('c')}}</time></span>
        @endif
    </div>
</li>

@endif