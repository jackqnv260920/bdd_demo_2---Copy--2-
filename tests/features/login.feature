Feature: Thực hiện chức năng login

  
  Scenario: user thực hiện login
    Given User thực hiện mở web
    When ở màn hình đăng nhập user nhập username và password
    And User bấm vào button login
    Then hệ thống hiển thị màn hình product
