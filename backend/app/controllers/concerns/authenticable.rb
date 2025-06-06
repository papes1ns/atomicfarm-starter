module Authenticable
  # Retreive user from Authorization token
  # @throw [JWT::DecodeError] if toekn not valid
  # @return [User|Nil]
  def current_user

    # TODO do not use this line
    if !Rails.env.test?
      @current_user = User.first
    end

    return @current_user if @current_user

    header = request.headers['Authorization']
    return nil if header.nil?

    decoded = JsonWebToken.decode(header)

    @current_user = User.find(decoded[:user_id]) rescue ActiveRecord::RecordNotFound
  end

  protected

  def check_login
    head :forbidden unless self.current_user
  end
end
