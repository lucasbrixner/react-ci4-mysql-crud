<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Users extends ResourceController
{
    protected $modelName = 'App\Models\UsersModel';
    protected $format    = 'json';

    public function index()
    {
        try {
            $selectAll = $this->model->findAll();
            if ($selectAll) {
                $response = [
                    'data'   => $selectAll,
                ];
                return $this->respond($response);
            } else {
                return $this->failNotFound('No users found');
            }
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    public function create()
    {
        $requestBody = $this->request->getJSON(true);
        try {
            $data = $requestBody['data'][0];
            $create = $this->model->insert($data);
            if ($create) {
                $data['id'] = $create;
                $response = [
                    'status'    => 201,
                    'details'   => [$data],
                    'message'   => 'User created',
                ];
                return $this->respondCreated($response);
            } else {
                return $this->failValidationErrors($this->model->errors());
            }
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }
}