<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Students extends ResourceController
{
    protected $modelName = 'App\Models\StudentsModel';
    protected $format    = 'json';

    public function index()
    {
        try {
            $selectAll = $this->model->findAll();
            if ($selectAll) {
                $data = [
                    'data' => $selectAll,
                ];
                return $this->response
                            ->setContentType('application/json;charset=utf-8')
                            ->setBody(json_encode($data));
            } else {
                return $this->failNotFound('No records found');
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
                    'message'   => 'Record added',
                ];
                return $this->respondCreated($response);
            } else {
                return $this->failValidationErrors($this->model->errors());
            }
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    public function show($id = null)
    {
        try {
            $select = $this->model->find($id);
            if ($select) {
                $response = [
                    'data' => [$select],
                ];
                return $this->respond($response);
            } else {
                return $this->failNotFound('Record not found');
            }
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    public function update($id = null)
    {
        $requestBody = $this->request->getJSON(true);
        try {
            $data = $requestBody['data'][0];
            $update = $this->model->update($id, $data);
            if ($update) {
                $data['id'] = $id;
                $response = [
                    'status'    => 200,
                    'details'   => [$data],
                    'message'   => 'Record updated',
                ];
                return $this->respond($response);
            } else {
                return $this->failValidationError($this->model->errors());
            }
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    public function delete($id = null)
    {
        try {
            $this->model->delete($id);
            if ($this->model->db->affectedRows() === 0) {
                return $this->failNotFound('Record not found');
            } else {
                $response = [
                    'status'    => 200,
                    'details'   => ['id' => $id],
                    'message'   => 'Record deleted successfully',
                ];
                return $this->respondDeleted($response);
            }
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

}
