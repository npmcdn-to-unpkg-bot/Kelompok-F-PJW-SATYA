myApp.constant('SERVICEURL', baseUrl);

myApp.controller('TodoCtrl', function ($scope, $http, SERVICEURL,toastr) {
    // for fetch all data
    $scope.init = function () {
        $http.get(SERVICEURL + '/pertanyaanjson').success(function (data) {
            $scope.pertanyaan = data;
        })
    }

    // for create a task
    // POST request to todos
    // $scope.create = function (todo) {
    //     $http.post(SERVICEURL + '/todos', todo)
    //         .success(function (data) {
    //             $scope.init();
    //             $scope.Todo = null;
    //             toastr.success('Record Created',{
    //                 progressBar:true,
    //                 closeButton: true,
    //                 timeOut: 2000,
    //             });
    //         })
    // }

    // edit section here we show the edit values
    // GET request to todos/{editId}/edit
    // $scope.edit = function (id) {
    //     $http.get(SERVICEURL + '/todos/' + id + '/edit').success(function (data) {
    //         $scope.todo = data;
    //     })
    // }

    // update section,here we update the value which is edited
    // PUT request to todos/{updateId}
    // $scope.update = function (todo) {
    //     $http.put(SERVICEURL + '/todos/' + todo.id + '', todo)
    //         .success(function (data) {
    //             $scope.init();
    //             $('#edit-modal').modal('hide');

    //             toastr.success('Record Updated',{
    //                 progressBar:true,
    //                 closeButton: true,
    //                 timeOut: 2000,
    //             });
    //         })
    // }

    // DELETE request to todos/{id}
    // $scope.delete = function (id) {
    //     if (confirm('Are you sure?')) {
    //         $http.delete(SERVICEURL + '/todos/' + id + '')
    //                 .success(function (data) {
    //                     $scope.init();
    //                     toastr.success('Record Deleted',{
    //                         progressBar:true,
    //                         closeButton: true,
    //                         timeOut: 2000,
    //                     });

    //         })
    //     }

    // }

    $scope.init();
})