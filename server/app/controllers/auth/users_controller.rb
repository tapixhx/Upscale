class Auth::UsersController < ApplicationController
    before_action :authorized, only: []

    def register
        @user = User.create(user_params)
        if @user.valid?
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        else
            render json: {error: "Invalid email or password"}
        end
    end

    def login
        @user = User.find_by(email: params[:email])
        # puts "Heloooooooooooooooooooooooo"
        # puts "#{@user.email}"
        if @user.email && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        else
            render json: {error: "Invalid email or password"}
        end
    end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
