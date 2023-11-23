<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return $this->response
            ->setHeader('Access-Control-Allow-Origin', '*')
            ->setHeader('Access-Control-Allow-Headers', '*')
            ->setHeader('Access-Control-Allow-Methods',
                'GET, POST, OPTIONS, PATCH, PUT, DELETE')
            ->setStatusCode(200);
    }
}
