<?php

return [

    /**
     * Application Name.
     */
    'application_name' => env('APP_NAME', 'Your Application'),

    /**
     * Client ID. 
     */
    'client_id' => 'duenoyoutube-175513',

    /**
     * Client Secret.
     */
    'client_secret' => 'AIzaSyA__bRO5_xDjLYyn9TIOf67Zk7MS14cNB4',

    /**
     * Scopes. 
     */
    'scopes' => [
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.upload',
        'https://www.googleapis.com/auth/youtube.readonly'
    ],

    /**
     * Developer key.
     */
    'developer_key' => env('GOOGLE_DEVELOPER_KEY', null),

    /**
     * Route URI's
     */
    'routes' => [

        /** 
         * Determine if the Routes should be disabled.
         * Note: We recommend this to be set to "false" immediately after authentication.
         */
        'enabled' => true,

        /**
         * The prefix for the below URI's
         */
        'prefix' => 'youtube',

        /**
         * Redirect URI
         */
        'redirect_uri' => 'callback',

        /**
         * The autentication URI
         */
        'authentication_uri' => 'auth',

        /**
         * The redirect back URI
         */
        'redirect_back_uri' => '/',

    ]

];
